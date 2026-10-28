import test from 'node:test';
import assert from 'node:assert/strict';
import { marked } from 'marked';

const commonmark = (source) => marked.parse(source, { gfm: false, breaks: false });
const gfm = (source) => marked.parse(source, { gfm: true, breaks: false });

test('CommonMark: ATX heading produces an h1', () => {
  assert.equal(commonmark('# Hello\n'), '<h1>Hello</h1>\n');
});

test('CommonMark: fenced code preserves code text', () => {
  assert.match(commonmark('```bash\necho hello\n```\n'), /<pre><code class="language-bash">echo hello\n<\/code><\/pre>/);
});

test('CommonMark: inline emphasis is rendered', () => {
  assert.equal(commonmark('This is **strong**.\n'), '<p>This is <strong>strong</strong>.</p>\n');
});

test('GFM: pipe table is rendered as a table', () => {
  assert.match(gfm('| A | B |\n| --- | --- |\n| 1 | 2 |\n'), /<table>/);
});

test('GFM: strikethrough is rendered', () => {
  assert.match(gfm('~~removed~~\n'), /<del>removed<\/del>/);
});

test('GFM: task list is rendered with checkbox markup', () => {
  assert.match(gfm('- [x] done\n- [ ] todo\n'), /type="checkbox"/);
});
