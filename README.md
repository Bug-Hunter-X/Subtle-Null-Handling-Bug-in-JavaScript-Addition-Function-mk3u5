# JavaScript Null Handling Bug

This repository demonstrates a subtle bug related to null handling in a simple JavaScript addition function. The `foo` function attempts to add two numbers, but it silently returns 0 if either input is null. This behavior might lead to unexpected results in certain scenarios.

## Bug Description

The function `foo` is intended to add two numbers. However, it lacks robust handling of null or undefined values. If either `a` or `b` is null, it simply returns 0, masking a potential error or data issue.

## Solution

The improved solution in `bugSolution.js` addresses this by throwing an error when either input is null or undefined, providing more informative error handling, allowing developers to handle these cases appropriately.
