// News-image entry: the image beside this file is the entry; copy it to /output/entry.png.
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const IMAGE_FILE = 'entry.png';

copyFileSync(new URL(`./${IMAGE_FILE}`, import.meta.url), join(outputDir, IMAGE_FILE));
