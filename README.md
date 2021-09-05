# モノレポリリースサイクル

NOTE: PAT が過去 commit に入っているのは問題ないです。


## モノレポrelease自動化の選択肢

- (GHA + Changesets + trigger)
  - GHA main に対し自分で 事前に changeset + workflow trigger
  - cons: release の予約みたいなことできん、release: release みたいなコメントするとテスト→リリース とかしてほしいやい！
- (GHA + Changesets + trigger + changesets actions)
  - GHA main に対し自分で 事前に changeset
  - -> PR が自動で作成
  - -> PR をマージすると main 上で pnpm publish -r
  - (全部で動かしてもいいかもしれないし、bot の PR の merge 時のみ、でも)
  - ★ バージョンを決めるのを自分でやる場合は一番きれいそう
- (GHA + semantic-release (conventional commits) + semantic-release-monorepo)
  - 試してない
  - すげー議論されてる: https://github.com/semantic-release/semantic-release/issues/193
  - pros: バージョン決めは自動に
  - cons: (semantic-release の話になるけれど) main = プロダクション、的にやるとき、リリースのタイミングを git で制御できない
- (buildkite) prisma で使われていた
