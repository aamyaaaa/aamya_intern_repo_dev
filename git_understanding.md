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