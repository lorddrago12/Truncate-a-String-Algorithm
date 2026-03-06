# Truncate a String Algorithm

A lightweight JavaScript utility that shortens a string to a specified character limit and appends an ellipsis (`...`) if the original string exceeds that limit.

---

## Table of Contents

- [Overview](#overview)
- [Function Signature](#function-signature)
- [Parameters](#parameters)
- [Return Value](#return-value)
- [How It Works](#how-it-works)
- [Usage](#usage)
- [Examples](#examples)
- [Edge Cases](#edge-cases)
- [Notes](#notes)

---

## Overview

When displaying text in constrained UI spaces — like cards, tooltips, or table cells — it's often necessary to cut long strings short. This algorithm checks if a string exceeds a given character limit; if it does, it slices the string and appends `"..."` to signal that content was truncated.

---

## Function Signature

```js
function truncateString(text, limit)
```

---

## Parameters

| Parameter | Type     | Description                                      |
|-----------|----------|--------------------------------------------------|
| `text`    | `string` | The input string to potentially truncate.        |
| `limit`   | `number` | The maximum number of characters to display.     |

---

## Return Value

- Returns the **original string** if its length is within the limit.
- Returns a **truncated string** with `"..."` appended if it exceeds the limit.

---

## How It Works

```js
let result;

function truncateString(text, limit) {
  if (text.length > limit) {
    result = text.slice(0, limit);
    return result + "...";
  } else {
    return text;
  }
}
```

**Step-by-step breakdown:**

1. **Check length** — `text.length > limit` compares the string's character count against the provided limit.
2. **Slice** — If the string is too long, `text.slice(0, limit)` extracts only the first `limit` characters.
3. **Append ellipsis** — `"..."` is concatenated to the sliced string before returning.
4. **Pass-through** — If the string is within the limit, it is returned unchanged.

---

## Usage

```js
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
// Output: "A-tisket..."

console.log(truncateString("Hello", 10));
// Output: "Hello"
```

---

## Examples

| Input String                                  | Limit | Output           |
|-----------------------------------------------|-------|------------------|
| `"A-tisket a-tasket A green and yellow basket"` | `8`   | `"A-tisket..."` |
| `"Hello, World!"`                              | `5`   | `"Hello..."`    |
| `"Hi"`                                         | `10`  | `"Hi"`          |
| `"JavaScript"`                                 | `10`  | `"JavaScript"`  |
| `""`                                           | `5`   | `""`            |

---

## Edge Cases

| Scenario                          | Behavior                                      |
|-----------------------------------|-----------------------------------------------|
| String length equals the limit    | Returns the original string (no truncation).  |
| Empty string `""`                 | Returns `""` (nothing to truncate).           |
| Limit of `0`                      | Returns `"..."` (empty slice + ellipsis).     |
| Limit larger than string length   | Returns the original string unchanged.        |

---

## Notes

- The `result` variable is declared in the outer scope, meaning it retains the last truncated value as a side effect. For cleaner, more predictable code, consider declaring `result` inside the function.
- The `"..."` ellipsis adds **3 extra characters** beyond the limit to the returned string — keep this in mind if you need strict total-length control.
- For Unicode-heavy strings (emojis, multi-byte characters), `String.prototype.slice()` operates on UTF-16 code units, which may split surrogate pairs. Use `Array.from(text)` for character-safe slicing in those cases.

---
