"""Run: python3 check.py. Validate local navigation, assets and plan enquiry wiring."""
from html.parser import HTMLParser
from pathlib import Path

class Site(HTMLParser):
    def __init__(self):
        super().__init__()
        self.ids, self.links, self.assets, self.plans, self.options = set(), [], [], [], []
    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if 'id' in a:
            assert a['id'] not in self.ids, f"Duplicate ID: {a['id']}"
            self.ids.add(a['id'])
        if tag == 'a':
            self.links.append(a.get('href', ''))
        if tag == 'script' or tag == 'link' and a.get('rel') in ('stylesheet', 'icon'):
            self.assets.append(a.get('src', a.get('href', '')))
        if 'data-plan' in a:
            self.plans.append(a['data-plan'])
        if tag == 'option':
            self.options.append(a.get('value'))

root = Path(__file__).parent / 'dist'
site = Site()
site.feed((root / 'index.html').read_text())
for link in site.links:
    if link.startswith('#') and len(link) > 1:
        assert link[1:] in site.ids, f'Broken anchor: {link}'
for asset in site.assets:
    if not asset.startswith('https://'):
        assert (root / asset).is_file(), f'Missing asset: {asset}'
assert set(site.plans) == {'Launch', 'Grow', 'Scale', 'Premium'}
assert len(site.plans) == 4
assert all(plan in site.options for plan in site.plans), 'Package missing from enquiry selector'
assert {'enquiry-form', 'enquiry-dialog', 'brief-preview', 'download-brief', 'plan-select'} <= site.ids
print('PASS: anchors, assets, four package choices, and enquiry controls')
