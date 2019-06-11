# Ignore inline messages which lay outside a diff's range of PR
github.dismiss_out_of_range_messages

# Make it more obvious that a PR is a work in progress and shouldn't be merged yet
warn("PR is classed as Work in Progress") if github.pr_title.include? "[WIP]" or github.pr_labels.include?("WIP")

# Warn when there is a big PR
warn("Big PR") if git.lines_of_code > 300
warn("Large PR") if git.lines_of_code > 500
warn("Huge PR") if git.lines_of_code > 700
warn("Freakin Huge PR") if git.lines_of_code > 1000

check_results = conflict_checker.check_conflict
conflict_checker.check_conflict_and_comment

eslint.config_file = "cypress/.eslintrc.json"
eslint.ignore_file = "cypress/.eslintignore"
eslint.lint