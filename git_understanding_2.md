# Advanced Git Commands & When to Use Them

## 1. git checkout main -- <file>

### What it does
This command restores a specific file in my working directory to match how it looks on the `main` branch, **without touching any other files or commits**. It only affects the working copy of that file.

### When I would use it
- When I’ve made changes to a file and realise I don’t want them anymore, but I don’t want to discard other changes in my working tree.
- When I want to quickly “reset” one file to the last known good version from `main` (for example, if I broke something while experimenting).


## 2. git cherry-pick <commit>

### What it does
`git cherry-pick` takes a specific commit from one branch and **re-applies its changes as a new commit** on the current branch. It doesn’t merge the whole branch, just that one commit.

### When I would use it
- When I fix a bug on a feature branch and realise the same fix is needed on `main` right now, without merging all the unfinished work from that branch.
- When I want to move a small, self-contained change from one branch to another (e.g. a documentation fix or a typo correction) without bringing along other unrelated commits.


## 3. git log

### What it does
`git log` shows the **commit history** for the repository: commit hashes, authors, dates, and messages. It lets me see how the code has evolved over time.

### When I would use it
- To understand the sequence of changes before debugging or refactoring.
- To find the commit hash I want to cherry-pick or revert.
- To review what was done in a branch before opening a pull request.

(Using flags like `git log --oneline --graph --decorate` makes it much easier to visualise branches.)


## 4. git blame <file>

### What it does
`git blame <file>` shows, line by line, **which commit last modified each line**, and who made that change. It links each line to a specific author and timestamp.

### When I would use it
- To find out who last changed a particular line before asking a question or making a risky modification.
- To see the context of a change by jumping from `git blame` to the commit in `git log` or the Git client.
- To understand why a strange line of code exists by looking at the commit message associated with it.


## What Surprised Me While Testing

- I was surprised that `git checkout main -- <file>` only resets that single fil* in my working directory and doesn’t change my current branch or commit history. It felt a bit like a “targeted undo” for one file.
- With `git cherry-pick`, I didn’t realise at first that it creates a new commit with a different hash, even though the content is the same. That helped me understand why cherry-picked commits still appear as separate history.
- Running `git log` with different options (`--oneline`, `--graph`) made the history much clearer and helped me see how branches diverged and merged.
- `git blame` felt a bit intimidating at first, but it turned out to be very useful for understanding the story behind specific lines of code, especially when I combined it with viewing the related commit details.
