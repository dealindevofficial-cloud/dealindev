"use client";

import {
  type KeyboardEvent,
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";
import { cn } from "@/lib/utils";

export type SelectOption = {
  value: string;
  label: string;
  disabled?: boolean;
};

export type SelectProps = {
  id?: string;
  name?: string;
  className?: string;
  disabled?: boolean;
  required?: boolean;
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  placeholder: string;
  options: readonly SelectOption[];
};

const triggerBase =
  "focus-ring flex h-12 w-full items-center justify-between gap-3 rounded-[var(--radius-md)] border border-surface-border bg-surface px-4 text-left text-base transition-colors duration-200 hover:border-accent/50 focus:border-accent";

export function Select({
  id,
  name,
  className,
  disabled,
  required,
  defaultValue = "",
  value: controlledValue,
  onValueChange,
  placeholder,
  options,
}: SelectProps) {
  const reactId = useId();
  const listboxId = id ? `${id}-listbox` : `${reactId}-listbox`;
  const [open, setOpen] = useState(false);
  const [uncontrolled, setUncontrolled] = useState(defaultValue);
  const isControlled = controlledValue !== undefined;
  const selected = isControlled ? controlledValue : uncontrolled;

  const allOptions = useMemo<SelectOption[]>(
    () => [{ value: "", label: placeholder, disabled: true }, ...options],
    [placeholder, options],
  );

  const firstEnabledIndex = useMemo(
    () => Math.max(0, allOptions.findIndex((o) => !o.disabled)),
    [allOptions],
  );

  const setSelected = useCallback(
    (v: string) => {
      if (!isControlled) setUncontrolled(v);
      onValueChange?.(v);
    },
    [isControlled, onValueChange],
  );

  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const [highlightedIndex, setHighlightedIndex] = useState(() => firstEnabledIndex);

  const openDropdown = useCallback(() => {
    const idx = allOptions.findIndex((o) => o.value === selected && !o.disabled);
    setHighlightedIndex(idx >= 0 ? idx : firstEnabledIndex);
    setOpen(true);
  }, [allOptions, firstEnabledIndex, selected]);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  useEffect(() => {
    if (!open || !listRef.current) return;
    const el = listRef.current.querySelector<HTMLElement>(`[data-option-index="${highlightedIndex}"]`);
    el?.scrollIntoView({ block: "nearest" });
  }, [highlightedIndex, open]);

  const moveHighlight = useCallback(
    (dir: 1 | -1) => {
      setHighlightedIndex((prev) => {
        let i = prev;
        for (let n = 0; n < allOptions.length; n++) {
          i = (i + dir + allOptions.length) % allOptions.length;
          if (!allOptions[i]?.disabled) return i;
        }
        return prev;
      });
    },
    [allOptions],
  );

  const chooseHighlighted = useCallback(() => {
    const opt = allOptions[highlightedIndex];
    if (!opt || opt.disabled) return;
    setSelected(opt.value);
    setOpen(false);
    triggerRef.current?.focus();
  }, [allOptions, highlightedIndex, setSelected]);

  const onTriggerKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (disabled) return;

    if (e.key === "Tab" && open) {
      setOpen(false);
      return;
    }

    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      if (!open) {
        openDropdown();
        return;
      }
      moveHighlight(e.key === "ArrowDown" ? 1 : -1);
      return;
    }

    if (open && e.key === "Home") {
      e.preventDefault();
      setHighlightedIndex(firstEnabledIndex);
      return;
    }

    if (open && e.key === "End") {
      e.preventDefault();
      for (let i = allOptions.length - 1; i >= 0; i--) {
        if (!allOptions[i].disabled) {
          setHighlightedIndex(i);
          break;
        }
      }
      return;
    }

    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (!open) {
        openDropdown();
        return;
      }
      chooseHighlighted();
      return;
    }

    if (e.key === "Escape") {
      if (!open) return;
      e.preventDefault();
      setOpen(false);
    }
  };

  const selectedLabel =
    selected === "" ? placeholder : (options.find((o) => o.value === selected)?.label ?? placeholder);

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      {name ? (
        <input type="hidden" name={name} value={selected} required={required} disabled={disabled} />
      ) : null}
      <button
        ref={triggerRef}
        type="button"
        role="combobox"
        id={id}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listboxId}
        aria-activedescendant={open ? `${listboxId}-opt-${highlightedIndex}` : undefined}
        className={cn(
          triggerBase,
          disabled && "cursor-not-allowed opacity-60",
          selected === "" ? "text-foreground-muted" : "text-foreground",
        )}
        onClick={() => {
          if (disabled) return;
          if (open) setOpen(false);
          else openDropdown();
        }}
        onKeyDown={onTriggerKeyDown}
      >
        <span className="min-w-0 truncate">{selectedLabel}</span>
        <svg
          aria-hidden
          className={cn(
            "h-4 w-4 shrink-0 text-foreground-muted transition-transform duration-200",
            open && "rotate-180",
          )}
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="m6 8 4 4 4-4"
          />
        </svg>
      </button>

      {open ? (
        <ul
          ref={listRef}
          id={listboxId}
          role="listbox"
          aria-label={placeholder}
          className="absolute left-0 right-0 top-full z-50 mt-1.5 max-h-60 overflow-y-auto rounded-[var(--radius-md)] border border-surface-border bg-surface py-1.5 shadow-lg"
        >
          {allOptions.map((opt, index) => {
            const highlighted = highlightedIndex === index;
            const isSelected = selected === opt.value && opt.value !== "";
            return (
              <li
                key={`${opt.value}-${index}`}
                id={`${listboxId}-opt-${index}`}
                role="option"
                aria-selected={isSelected}
                aria-disabled={opt.disabled || undefined}
                data-option-index={index}
                className={cn(
                  "mx-1.5 cursor-pointer rounded-[var(--radius-sm)] px-3 py-2.5 text-sm transition-colors",
                  opt.disabled && "cursor-default text-foreground-muted",
                  !opt.disabled && highlighted && "bg-accent-soft text-accent-text",
                  !opt.disabled && !highlighted && "text-foreground",
                  isSelected && !opt.disabled && "font-medium",
                )}
                onMouseEnter={() => !opt.disabled && setHighlightedIndex(index)}
                onMouseDown={(e) => {
                  if (opt.disabled) return;
                  e.preventDefault();
                  setSelected(opt.value);
                  setOpen(false);
                  triggerRef.current?.focus();
                }}
              >
                {opt.label}
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
