# ChinaTripTools content workflow

The user addresses the project coordinator in the current chat. They do not need to remember or contact individual agents. The coordinator assigns work by stage, checks handoffs, and reports one consolidated status.

## Roles and handoffs

1. Research: inspect existing pages, GSC and keyword data. Deliver a candidate keyword, country database, volume, KD, intent, and overlap check.
2. Fact check: verify claims with current primary sources. Deliver source URLs, check date, and unresolved claims.
3. Editor: produce a Spanish brief and draft from approved research and verified facts. Include internal links and relevant site-tool calls to action.
4. Builder: implement the approved draft in the existing static site and prepare a local preview.
5. QA: check facts, links, mobile layout, metadata, sitemap, and build. Fix and retest failures before handoff.
6. Release: after approval of the concrete tested page, publish, verify the live URL, then submit to GSC and Bing and record outcomes.

Only the coordinator advances a stage after its output is reviewable. Do not invent keyword metrics, official rules, user experiences, or screenshots. Preserve public URLs and crawlable content if user accounts are added later.

## Twice-weekly review

- Monday 11:00 Asia/Shanghai: Review coordinator reads the previous week's GSC and Bing organic-search data, the live page inventory, previous recommendations, and release outcomes. It asks Research to explain demand and page-query overlap, Fact check to flag changed official guidance, and QA to flag technical or content issues. It reconciles their findings into one prioritized plan for this week and a draft plan for next week. Each recommendation names evidence, the page to change, owner, expected outcome, and a measurement date.
- Wednesday 11:00 Asia/Shanghai: Review coordinator checks the Monday plan against fresh data and completed work, challenges weak assumptions with Research and QA, and selects the second content/optimization update. It records what changed, what remains uncertain, and what will be reviewed next Monday.
- Each role receives the previous role's written handoff before acting. The coordinator records disagreements and resolves them with evidence; agents do not independently publish or submit URLs.
- Both weekly runs may research, draft, build, and test. Production release follows the existing tested-page review and user confirmation gate. Two weekly updates are a cadence target, not permission to publish unverified work.

## Access for the pilot

- Research: read-only access to public keyword pages, GSC and Clarity only when an existing signed-in session is available. No credential handling or account changes.
- Fact check: public web read access only; no site or account writes.
- Editor: read project files and approved sources; write drafts in the project workspace only.
- Builder: edit project code/assets in the project workspace and run a local preview; no production access.
- QA: read project and local preview, run checks, and report failures; corrections go back to Builder.
- Release: production and GSC/Bing actions only after tested output and explicit user approval for that release.

These are operating boundaries for delegated tasks, not installed account permissions or persistent agents. If a session is unavailable, the coordinator asks the user to sign in through their browser; passwords are not shared with agents.

## Pilot: China plugs

Status: research candidate, not an approved article or deployment.

- Spain database: `enchufes en china` 480/month, KD 17; `tipo de enchufe en china` 140/month, KD 13; `que enchufe se usa en china` 70/month, KD 14. Observed in the keyword tool on 2026-11-04.
- Next research gate: check Mexico and Argentina databases, search-result intent, current site overlap, and authoritative electrical references. Then present one brief for approval.

## How to request work

Ask the coordinator in natural language, for example: “继续插座页的资料核验”, “让编辑出大纲”, “检查测试页”, or “上线并提交搜索平台”. The coordinator identifies the stage and reports the responsible role and result.
