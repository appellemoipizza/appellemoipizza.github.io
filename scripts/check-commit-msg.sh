#!/usr/bin/env sh
# Reject commit messages that are not Conventional Commits.
# https://www.conventionalcommits.org
#
# No dependencies on purpose: this has to work in Python, Node and plain repos
# alike. If you later want scopes and types enforced by config, swap this for
# commitlint in a repo that already has Node.

msg_file="$1"
subject=$(head -n1 "$msg_file")

# let git's own generated messages through
case "$subject" in
  "Merge "*|"Revert "*|"fixup!"*|"squash!"*) exit 0 ;;
esac

pattern='^(feat|fix|docs|style|refactor|perf|test|build|ci|chore|revert)(\([a-z0-9._/-]+\))?!?: .+'

if printf '%s' "$subject" | grep -Eq "$pattern"; then
  exit 0
fi

cat >&2 <<MSG

  Commit rejected: the subject is not a Conventional Commit.

    got:      $subject
    expected: <type>[(scope)][!]: <description>

  Types: feat fix docs style refactor perf test build ci chore revert
  A "!" or a "BREAKING CHANGE:" footer marks a breaking change.

  Examples:
    feat(auth): allow login with a magic link
    fix: reject invoice lines with no amount
    chore!: drop support for node 18

  The type is machine-read: it decides the version bump and the changelog
  entry. Get it wrong and the release is wrong.

MSG
exit 1
