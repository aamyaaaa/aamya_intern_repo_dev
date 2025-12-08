# Advanced Git Commands & When to Use Them

## git checkout main -- <file>

### What this command does
Restores a specific file to match the version on `main` **without changing any other files or commits**.

### When to use it
- You broke a single file and want to revert only that file
- You want a “precise undo” without touching other progress

### What I tested
```bash
git checkout main -- src/App.jsx
```
The file reverted while all other work stayed intact.

## git cherry-pick <commit-hash>

### What this command does
Applies **one specific commit** from another branch onto the current branch — **without merging the whole branch**.

### When to use it
- A bug fix on another branch is urgently needed in `main`
- You want only one useful commit, not unrelated work

### What I tested
```bash
git cherry-pick a1b2c3d4
```
The code was applied to `main` but created a **new commit with a new hash** — meaning history stays clean.

## git log

### What this command does
Shows the full commit history with authors, timestamps, and messages.

### When to use it
- To find the exact commit to revert or cherry-pick
- To understand past changes before debugging/refactoring
- To review history before creating a PR

### What I tested
```bash
git log --oneline --graph --decorate
```
This made branch structure easy to understand visually.

---

## git blame <file>

### What this command does
Shows **who last modified each line** of a file and when it happened.

### When to use it
- To ask the right teammate why a change was made
- To trace when a bug was introduced

### What I tested
```bash
git blame src/Counter.jsx
```
I could see my previous edit, author name, and commit details line-by-line.


## What Surprised Me

| Command | What I Learned |
|--------|----------------|
| `git checkout -- file` | Only resets ONE file — doesn’t switch branches |
| `git cherry-pick` | Creates a **new commit** even if content is same |
| `git log --graph` | Makes commit/branch history MUCH easier to understand |
| `git blame` | Helps understand the story and purpose behind each change |

---

## Summary

| Command | Useful For |
|--------|------------|
| `git checkout main -- file` | Undoing one file safely |
| `git cherry-pick` | Moving **one important commit** |
| `git log` | Investigating history |
| `git blame` | Tracking responsibility + debugging |

These tools are especially important in real-world teamwork, where multiple developers are editing code and tracking down issues matters a lot.
