# Sum up 24 November's world news in one image — V4

A newspaper front page summing up Tuesday 24 November 2026, drawn from scratch
with plain shapes (no photos, no copied art). Every story on it was first
reported on 24 November 2026.

Leads: Democrats clinch at least 259 US House seats (largest majority since
1990); Huawei guilty on 10 of 12 counts. Plus Iran's tanker-mine claims in the
Strait of Hormuz, the CIA/ODNI breach, Putin's refinery retaliation vow, the
Turkish helicopter crash, the Cartagena hostage standoff, Houthis 60 km from
Aden, the Riyadh tower drone strike, the Hamas security chief killed in Gaza,
Baghdad's Kurdish oilfield takeover order, and the Hanoi hot-pot blast — with
a "Where it happened" map (10 labelled cities, Middle East inset) and ten
more briefs.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only, no network) writes `entry.png`
(1024×1024, under 1 MiB) to the output directory, fresh, byte-identical on
every run. `render-v4.py` is the scratch renderer that drew the image.
