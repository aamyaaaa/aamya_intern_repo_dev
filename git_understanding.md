# Git Concepts: Staging vs. Committing

## 1. The Core Difference

The Git workflow involves three states: Working Directory, **Staging Area**, and **Repository** (History).

| Action | Command | Role |
| :--- | :--- | :--- |
| **Staging** | `git add` | We prepare a snapshot of specific file changes in the Staging Area, defining what goes into the next commit. |
| **Committing** | `git commit` | We permanently save the staged snapshot into the Repository, creating a permanent, traceable checkpoint (commit). |

## 2. Why Separate Staging and Committing?

Git separates these steps to allow for **controlled history**:

* **Logical Grouping**: We can make small, focused commits by grouping only related changes, even if we modified many files simultaneously.
* **Review**: It provides a final chance to review the exact snapshot (`git diff --staged`) before the commit is permanent.
* **Partial Commits**: We can choose to commit only a portion of the changes within a single file.

## 3. When to Stage Without Committing?

We stage changes without committing when the work is done but requires a temporary hold:

* **Switching Context**: We stage our changes before using `git stash` to quickly save and switch branches for an urgent task.
* **Awaiting Prerequisite**: We wait for a required dependency or another team's merge before finalizing our commit.
* **Final Testing**: We use the staged state for a final verification check before making the permanent record.

## Branching & Team Collaboration Reflection

### Why is pushing directly to main problematic?
Pushing directly to the main branch is risky because it can introduce bugs or
unfinished features into production-ready code. It removes the opportunity for
code review and makes it harder to track or revert breaking changes, especially
in team environments.

### How do branches help with reviewing code?
Branches allow developers to work on features or fixes in isolation. Changes can
be reviewed through pull requests before being merged into main, ensuring better
code quality, consistency, and fewer bugs. Reviewers can give feedback without
affecting the stable codebase.

### What happens if two people edit the same file on different branches?
Git keeps the changes separate until the branches are merged. If both developers
modify the same lines, a merge conflict occurs, which must be manually resolved.
This ensures that no one’s work is silently overwritten.

## isuue 61
## Merge Conflicts & Conflict Resolution

### What caused the conflict?
The conflict happened because the same file (`conflict-demo.txt`) was created/edited
on both `main` and `issue_53`. When Git tried to merge, it couldn’t automatically
decide which version of the file to keep (add/add conflict), so it stopped and
asked for manual resolution.

### How did you resolve it?
I opened the conflicted file and used the conflict markers (`<<<<<<<`, `=======`,
`>>>>>>>`) to compare the two versions. I chose the correct final content,
removed the conflict markers, saved the file, then staged and committed the merge
resolution.

### What did you learn?
Merge conflicts are a normal part of collaboration. They happen when changes
overlap, and Git needs a human decision. Resolving conflicts is about
understanding both changes and deciding the final correct version. Keeping
branches small and syncing often helps reduce conflicts.