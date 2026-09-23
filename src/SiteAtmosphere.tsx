import { useId } from 'react'

const contours = {
  body: `M 441 187
    C 396 218 354 207 301 190 C 261 175 220 170 191 185
    C 151 208 135 250 137 293 C 139 342 155 390 187 414
    C 216 438 262 437 305 427 C 365 410 434 363 493 316
    L 505 286 L 463 204 Z`,
  mane: `M 438 162
    C 417 157 420 136 436 117 C 429 90 449 63 480 59
    C 482 32 509 14 534 23 C 541 25 545 30 549 31
    C 566 14 588 13 604 26 C 632 19 658 34 663 59
    C 690 60 716 82 716 109 C 737 124 746 150 738 175
    C 753 193 748 216 730 233 C 747 256 734 280 710 286
    C 711 313 689 336 664 328 C 647 355 620 356 598 338
    C 578 357 552 349 545 328 C 523 337 504 323 503 303
    C 479 303 461 286 464 264 C 441 257 428 237 440 216
    C 420 202 421 181 438 162 Z`,
  head: `M 563 46
    C 528 47 499 67 482 99 C 465 128 461 164 469 197
    C 478 237 503 270 534 297 C 561 322 590 336 619 332
    C 660 327 694 297 713 258 C 719 245 724 231 727 216
    C 742 212 755 204 762 198 Q 766 194 759 189
    Q 744 180 728 175 C 718 124 683 72 626 51
    C 624 36 619 18 613 9 Q 607 2 599 7 Q 582 18 563 46 Z`,
  scarfWrap: `M 439 157
    C 426 153 420 169 418 188 L 414 218
    C 436 230 466 259 487 286 C 510 313 545 339 566 326
    Q 574 321 573 315 C 548 310 530 301 514 286
    C 480 254 461 205 455 160 Q 447 155 439 157 Z`,
  scarfBack: `M 496 221
    C 511 222 524 236 522 250 L 504 315
    Q 501 329 488 326 L 451 312 Q 443 308 448 299
    L 469 239 Q 476 223 496 221 Z`,
  scarfFront: `M 468 197
    C 449 197 430 209 414 215 L 390 228
    Q 378 235 383 253 L 394 291 Q 398 306 412 300
    L 498 262 Q 513 253 506 240 L 485 205 Q 479 195 468 197 Z`,
}

function OcclusionMask({ id, paths }: { id: string; paths: string[] }) {
  return (
    <mask id={id} maskUnits="userSpaceOnUse" x="50" y="-10" width="740" height="470">
      <rect x="50" y="-10" width="740" height="470" fill="white" />
      {paths.map((path) => <path key={path} d={path} fill="black" stroke="none" />)}
    </mask>
  )
}

export default function SiteAtmosphere() {
  const id = useId()
  const scarf = [contours.scarfWrap, contours.scarfBack, contours.scarfFront]

  return (
    <div className="siteAtmosphere" aria-hidden="true">
      <svg className="atmosphereMark" viewBox="150 0 460 800" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Hide rear contours without adding opaque fills over the page background. */}
          <OcclusionMask id={`${id}-limbs`} paths={[contours.body, contours.mane, ...scarf]} />
          <OcclusionMask id={`${id}-body`} paths={[contours.mane, ...scarf]} />
          <OcclusionMask id={`${id}-mane`} paths={[contours.head, ...scarf]} />
          <OcclusionMask id={`${id}-scarf`} paths={[contours.head, contours.scarfFront]} />
          <OcclusionMask id={`${id}-head`} paths={[contours.head]} />
        </defs>
        {/* Absolute Bezier points follow the Episode 4 CG, rotated upright. */}
        <g transform="translate(0 680) rotate(-64)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <g className="sakuOutline" mask={`url(#${id}-limbs)`}>
            <path d="M 147 255 C 124 247 96 202 86 183 Q 79 168 104 182 C 125 196 143 216 157 237 Z" />
            <path d="M 174 362 C 140 374 104 393 80 404 Q 68 413 91 413 C 117 415 155 403 183 387 Z" />
            <path d="M 431 170 C 408 165 393 156 384 146 Q 367 129 369 151 C 373 172 392 190 415 198 Z" />
            <path d="M 491 309 C 495 337 511 362 527 380 Q 540 394 535 373 C 530 356 528 340 529 324 Z" />
          </g>
          <g className="sakuOutline" mask={`url(#${id}-body)`}>
            <path d={contours.body} />
            <path className="sakuInset" d="M 390 240 C 351 248 312 234 285 232 C 254 229 230 240 216 264 C 201 290 203 322 219 344 C 238 369 270 376 305 366 C 351 353 404 314 435 282" />
            <path className="sakuStitch" d="M 381 248 C 348 254 310 241 283 240 C 254 237 232 250 222 272 C 210 297 213 324 229 342" />
          </g>
          <g className="sakuOutline" mask={`url(#${id}-mane)`}>
            <path d={contours.mane} />
          </g>
          <g className="sakuScarf" mask={`url(#${id}-scarf)`}>
            <path d={contours.scarfWrap} />
            <path className="sakuInset" d="M 439 166 C 430 181 430 193 433 205 M 515 308 Q 539 329 558 321" />
            <path d={contours.scarfBack} />
            <path className="sakuInset" d="M 514 254 L 496 312 Q 495 318 488 315 L 459 304 M 488 283 Q 481 298 479 307" />
          </g>
          <g className="sakuScarf" mask={`url(#${id}-head)`}>
            <path d={contours.scarfFront} />
            <path className="sakuInset" d="M 391 249 L 405 289 Q 407 294 413 291 L 493 255 Q 501 251 498 244 L 479 210 Q 476 206 471 207 C 451 211 421 226 395 238" />
            <path className="sakuStitch" d="M 403 280 Q 407 289 415 285 L 489 252" />
            <path className="sakuInset" d="M 459 213 Q 444 219 437 226 M 454 238 Q 470 229 481 226" />
            <path className="sakuPin" d="M 437 278 L 446 274 L 450 283 L 441 287 Z M 440 281 L 447 278 M 433 285 L 442 281 M 436 282 L 440 291" />
          </g>
          <g className="sakuOutline">
            <path d={contours.head} />
            <path className="sakuInset" d="M 588 34 Q 594 25 601 20 Q 607 30 611 43 Q 599 37 588 34 Z M 735 185 Q 744 190 749 196 Q 740 202 732 204 Z" />
            <ellipse className="sakuFeature" cx="599" cy="82" rx="15.5" ry="10.5" transform="rotate(28 599 82)" />
            <ellipse className="sakuFeature" cx="686" cy="205" rx="10.5" ry="16" transform="rotate(13 686 205)" />
            <path d="M 626 154 C 632 157 639 161 644 168 C 654 180 649 195 639 201 C 625 210 609 200 604 188 Q 600 178 605 168 C 596 174 583 168 577 159 C 568 145 575 130 587 125 C 600 120 615 131 620 145" />
            <path className="sakuFeature" d="M 622 141 C 626 138 632 142 633 147 Q 635 155 627 155 Q 617 154 622 141 Z" />
            <path className="sakuInset" d="M 625 155 Q 620 162 612 166" />
          </g>
          <g className="sakuBlush">
            <ellipse cx="554" cy="101" rx="8" ry="12" transform="rotate(-40 554 101)" />
            <ellipse cx="655" cy="247" rx="8" ry="12" transform="rotate(-24 655 247)" />
          </g>
        </g>
      </svg>
    </div>
  )
}
