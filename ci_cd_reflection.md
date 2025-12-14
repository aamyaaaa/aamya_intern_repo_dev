# CI/CD Reflection

## What is the purpose of CI/CD?
Continuous Integration (CI) is used to automatically check code whenever changes
are pushed or a pull request is created. It helps catch issues early by running
linting, tests, and other quality checks before code is merged into the main
branch. Continuous Delivery or Deployment (CD) builds on CI by automating the
process of preparing and releasing software, making updates more reliable and
consistent.

## How does automating style checks improve project quality?
Automating style checks such as Markdown linting and spell checking ensures that
documentation remains consistent, readable, and professional. It removes the
need for manual checking during code reviews and prevents small mistakes like
formatting errors or typos from being merged. This allows reviewers to focus on
the actual logic and functionality instead of documentation issues.

## What are some challenges with enforcing checks in CI/CD?
One challenge is that strict rules can sometimes slow down development or cause
frustration if they produce false positives. For example, spell checkers may flag
technical terms, names, or library-specific words. CI checks can also fail due to
environment differences or misconfigured pipelines, which requires time to
debug and maintain.

## How do CI/CD pipelines differ between small projects and large teams?
In small projects, CI/CD pipelines are usually simple and focus on basic checks
like linting and unit tests. In large teams, pipelines are more complex and may
include multiple stages such as security scans, integration tests, build
artifacts, deployment to different environments, and approval gates. Larger
teams also rely more heavily on protected branches and mandatory reviews to
maintain code quality at scale.