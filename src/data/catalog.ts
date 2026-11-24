import { CartItem, Product } from '../types/store';

export const EDITORIAL_IMAGES = {
  hero: 'https://lh3.googleusercontent.com/aida/ALJJyrCgE2a-0WekZZm4Sd5nX1LTscQBp1p28Q7Tk4FqSsHGoobMtp3fRuLTiMw15F58UL5jwCSzYYLitzsVizF6ifpiZaSHyJHTATV3LrN9ot6WbA6geH-mTh75qAAsnV1WYrH6vemXp6fx9Yn4zc56-lfOEh87Gh1f8izXeRva5NOT_xnsKe80Q6PH5ShEUcTLAifLjTK4GNJUSt6GoqY43XLSMwIOl8KjozcuOvOUGZe8nESPqBTMw526HQ',
  mensTailoring:
    'https://lh3.googleusercontent.com/aida/ALJJyrB9xZv01pREZUNwsWhNp0D1RQHcGMv2AIuWIVcx6aXrGL_HmjAr-px-hk21vp5HRI054ti9eA6-lvRsiCWeSzVaoxNBYR_u7Ht0HT3vWYOxLeensaovDY6JbOjgdLHkqag_ERiVatt6b2ATV38o0Wf1UeQQ0IIRauMZI2zvDveQ9Nbgj8WRmFtV-i3pDRmGao4TiOxkAR17GdTog2NRIjfEJ8ONrpWfn9RqQZjMZ-yr2XrIgUwgRY5zpm9YHMySgA',
  cashmereKnitwear:
    'https://lh3.googleusercontent.com/aida/ALJJyrDb9zToXXadpWf-2gg0fGQkzncRjv7JUZvzYXgpOqgFXzzUAcll7JEy8mcyxJi-S3qFl27YbdNccyPBFVBYWjA_ikAMIkvQ1wxQQ6R0dHgaaTvGnoKP6M2rTcqqikfvB6UpFGDj8OadY9FSdv35if7UnAB0o4ksDy4Zbh_df57Z7A_zGW4oHmMKTTpbK_keOXn5_8jOQsYh3xGBDQ6LHnmaqasvS062chVJ_mYa8qbf8GxL-OPJ7bNGIjNqOh0g',
  signatureOuterwear:
    'https://lh3.googleusercontent.com/aida/ALJJyrBYIDbtRzvVOgqs7600OB5GEhPt5WbXhoWbt3Wi4-G5iwutMv-PZGYNjgSrCdJP9ttR6Dg84nahKjavDdOm-Xdg-jwwuMyGHMqnnTjut9L8jBzfo_p_e0zmVxFresQnPR1HY2JtMQhCxvB_tSZ_VGULl9fy7WnU7KIBmN1gswiaZlH92qPHJA9OQ9MKR1k7lPj_DelArYiGOfgy8-D_vAgimZdRmb3ziEtS9CgFRJzezRSjVnzyvZ3OdAF_KeNHsQ',
  cashmereBeltedCoat:
    'https://lh3.googleusercontent.com/aida/ALJJyrB-1qUt79CLkfjzgdpptYTk89j6NdhbDNsCL9HbZ9OQenOJ5EePaJV4R0x1FJSrEiCyJ-5Thrvgt3RgYS3OQN85jt-RzbVES0iBu73wsyNDAmPZUeKjWApSZr6FK7lL9X8qSzPi-39G116VmjLbIh2ENfjQm2JWfQPhH0tUwIwjtt1bnuMN-IihXk11HWWbGLYLFS_yGRi6oSltkAdh7HmcWxQMYEhOswJLBuUuAq354WSwCti9QrhaoAYN4LctT1M',
  sandTailoredBlazer:
    'https://lh3.googleusercontent.com/aida/ALJJyrCxwyGOSY4VPNVc9Tg3DPsQfaH5ENE7NAYe_gRVmxCcWV8EDy20YFXC31JzExSYZcXWnXlSZjPeGexvkU1VPxaEjH8g7w0EnO2NU6Yd94Q3PoDtJXSc-ZQlkF2B1R_pt6Bpbv4QcfI_E5M_aoj9mAcPtD_DDD9y8PoOUvSGZ7iivyAjhRrFeHbgbMJbGQedJZcuWljgfgoCUzqI86OYOtZcfJ8hjbiVuvr6DZvfw84iQ_OcccoTxt1XW9K0KMJ_Pg',
  ivorySilkDress:
    'https://lh3.googleusercontent.com/aida/ALJJyrCfIM555GyHHO8uqtaaHoyYiwhIysUVU4pYntBJ5kOrGBsTYM18_2uGSSa1LE_8XbjkIO7eYeJeCa2rTCtOFG0oVYckUI1z32sMFfXM06FZMW6ctcfXflQ1d4nz91mmJ9Do-LZ5XJwkxZ2nuQ-dioktxJfMF5nS7mpiG02Am9F0ISiIkzhIsfVdDiHQow-Z9aZ1fMV5_1ns-3KT5KLOYeVQJFDhTWOVYPvjXsXZMHjf5BNKpBu_JPrmmkv96Q',
  calfskinTote:
    'https://lh3.googleusercontent.com/aida/ALJJyrCM2T-y7GJav37eNTD0D5wMs4lkLTCmYTzFF7OvosH8-H5EJnCCLRIg9QkqNMDPjEzgecL9-hmbMEfpy9Zl7ZuDOxPxshkN-lRip4q1Vqf0MNAuNnSPR3CT3HZOTJsBtLjvASu-gJFjjrLb-CEHNTCiBfYZg6f2L_cCM9D3-SH48B-7bIt7AWvygInzl8wsxHGJdSq8gJqlYtijeBsvE6lO99Gr6hsUxPJFWjj5UPynngzH3UeRgMphGwvXrMpj',
  cashmereCapsuleBanner:
    'https://lh3.googleusercontent.com/aida/ALJJyrAI_woqSf8iIMhstjD6f7y_Tg93GtV2tPRXXM2L50l7h0fUDfa9UXOtWk6j6aGZzmezUetrQ69ay-HN4xXCThTKRzjmUQoqm1qO4ISvibWSRmimD2LdIbSpFPCKiZacX2GvPCQVdUw3klff3CBGMB-QWWkW2q1a8_fbdkFZ7nYlzXQUQeTWxZJOFLBt4itH7fbtqlKT-kZrUE2OgQ0eiYSd6jHikBcb8-LcIMTzK1vEilJK0a3W',
  mensModernTailoring:
    'https://lh3.googleusercontent.com/aida/ALJJyrA1sZFOZlC6dZcbx-S_Q35kLqJ0BDxlXvZq6dwk-i4KiAfcPxQ9HTYv4NUPFdXfCkZ144oiq_pBSQ8nQtuROUqp8O0HTJw2Kh7LOytedWTMHWVnOPOV6nli0L5qEmVmvoYzbxwf8_Mqm6IMrb9VtC2f3rbQ0-kuoAIhSPqD0N8KexY6vV2PZnuaIutXU5uHfb_WemQpLoJlF9Yx-_53m84x7RSLW0QA4ZQq8rD6t2Mnh0pwxz7uWnPwYYdlJu3i',
  womensFluidSilhouettes:
    'https://lh3.googleusercontent.com/aida/ALJJyrDU-mSA-c-L9uNrcFMKIeZm13FGu52kIBS6CCf1XpD1NloiuUNDSa-CeLJIJKlCKcFrvgML-h6QYbhpB0jjVpi0sea_hD_fzA5M-i4FngXL14810mrqpl-pTy7uPF8tNaEEQyBBAsYDau95YU4AGTD4mZlYDjzRc5fhWbxSHorJYj_i5kYV9K4nFB9imYuoeiuZoP8PSieAfiUAxgwHzyZ5g1Jvf8KeCZGf0gDLLu9NFNRyuVDRCMXp0oYMbBXQE8k',
  fineMerinoCrewneck:
    'https://lh3.googleusercontent.com/aida/ALJJyrCc26Ts1eQipstRXS32IZzny5hN6mfUwE2mgYXTcjg1_abbRmhkvQSNQ9Obiv2EtuYMVaMgs4l9SFsjo9fRowg-cFpQxN9ZpOITqQDgFrFhisNUnesUzTsOK3R3Vw9pcP7ky-cnsIMU3FltiOlWLRT5n1uOaudnn906VAyFM42G1Q6u-v6LPN1GfRN-4oN_VsTRh78PQ8ONm5XbVHIAS8BxPT0UAqyPtE4iyrUE-k9VYXmKVLOb8WZWV7hZGxkz',
};

export const PRODUCTS: Product[] = [
  {
    id: 'cashmere-belted-coat',
    name: 'Cashmere Belted Coat',
    subtitle: 'Warm Oatmeal',
    department: 'women',
    category: 'outerwear',
    categoryLabel: 'Outerwear',
    price: 680,
    isNewArrival: true,
    isFeatured: true,
    collectionKicker: 'Autumn / Winter Atelier',
    description:
      'Tailored from double-faced Grade-A cashmere with hand-finished seams, a wide shawl collar, and a detachable tonal waist tie for an effortless, draped silhouette.',
    composition: '100% Traceable Cashmere. Specialist dry clean only.',
    origin: 'Crafted in Milan, Italy.',
    image: EDITORIAL_IMAGES.cashmereBeltedCoat,
    gallery: [
      EDITORIAL_IMAGES.cashmereBeltedCoat,
      EDITORIAL_IMAGES.signatureOuterwear,
    ],
    colors: [
      { name: 'Warm Oatmeal', swatchClass: 'bg-surface-variant' },
      { name: 'Charcoal Black', swatchClass: 'bg-primary' },
    ],
    sizes: [
      { label: 'XS', available: true },
      { label: 'S', available: true },
      { label: 'M', available: true },
      { label: 'L', available: true },
      { label: 'XL', available: false },
    ],
    defaultSize: 'S',
  },
  {
    id: 'sand-tailored-blazer',
    name: 'Sand Tailored Blazer',
    subtitle: 'Muted Beige',
    department: 'men',
    category: 'tailoring',
    categoryLabel: 'Tailoring',
    price: 495,
    isNewArrival: true,
    isFeatured: true,
    collectionKicker: 'Menswear Atelier',
    description:
      'Unstructured single-breasted blazer cut from brushed Italian virgin wool with horn buttons, clean notched lapels, and breathable cupro half-lining.',
    composition: '100% Italian Virgin Wool; 100% Cupro sleeve lining.',
    origin: 'Tailored in Biella, Italy.',
    image: EDITORIAL_IMAGES.sandTailoredBlazer,
    gallery: [
      EDITORIAL_IMAGES.sandTailoredBlazer,
      EDITORIAL_IMAGES.mensTailoring,
    ],
    colors: [
      { name: 'Muted Beige', swatchClass: 'bg-surface-variant' },
      { name: 'Charcoal Black', swatchClass: 'bg-primary' },
    ],
    sizes: [
      { label: 'XS', available: true },
      { label: 'S', available: true },
      { label: 'M', available: true },
      { label: 'L', available: true },
      { label: 'XL', available: true },
    ],
    defaultSize: 'M',
  },
  {
    id: 'ivory-bias-silk-dress',
    name: 'Ivory Bias Silk Dress',
    subtitle: 'Champagne Ivory',
    department: 'women',
    category: 'dresses',
    categoryLabel: 'Dresses & Silk',
    price: 390,
    isNewArrival: true,
    isFeatured: true,
    collectionKicker: 'Womenswear Evening',
    description:
      'Cut on the true bias from heavy 30-momme mulberry silk charmeuse, featuring a fluid cowl neckline and clean French seams that drape naturally along the body.',
    composition: '100% Mulberry Silk Charmeuse. Dry clean only.',
    origin: 'Finished in Como, Italy.',
    image: EDITORIAL_IMAGES.ivorySilkDress,
    gallery: [
      EDITORIAL_IMAGES.ivorySilkDress,
      EDITORIAL_IMAGES.womensFluidSilhouettes,
    ],
    colors: [
      { name: 'Champagne Ivory', swatchClass: 'bg-surface-container-low' },
      { name: 'Espresso Brown', swatchClass: 'bg-secondary' },
    ],
    sizes: [
      { label: 'XS', available: true },
      { label: 'S', available: true },
      { label: 'M', available: true },
      { label: 'L', available: true },
      { label: 'XL', available: false },
    ],
    defaultSize: 'S',
  },
  {
    id: 'atelier-calfskin-tote',
    name: 'Atelier Calfskin Tote',
    subtitle: 'Warm Taupe',
    department: 'women',
    category: 'accessories',
    categoryLabel: 'Leather Goods',
    price: 540,
    isNewArrival: true,
    isFeatured: true,
    collectionKicker: 'Leather Goods',
    description:
      'Architectural everyday tote sculpted from vegetable-tanned full-grain calfskin with hand-painted edges, suede interior lining, and concealed magnetic closure.',
    composition: '100% Full-Grain Italian Calfskin; Suede lining.',
    origin: 'Handcrafted in Florence, Italy.',
    image: EDITORIAL_IMAGES.calfskinTote,
    gallery: [
      EDITORIAL_IMAGES.calfskinTote,
      EDITORIAL_IMAGES.signatureOuterwear,
    ],
    colors: [
      { name: 'Warm Taupe', swatchClass: 'bg-tertiary' },
      { name: 'Obsidian Black', swatchClass: 'bg-primary' },
    ],
    sizes: [
      { label: 'OS', available: true },
    ],
    defaultSize: 'OS',
  },
  {
    id: 'double-breasted-wool-blazer',
    name: 'Double-Breasted Wool Blazer',
    subtitle: 'Charcoal Black',
    department: 'men',
    category: 'tailoring',
    categoryLabel: 'Tailoring',
    price: 740,
    isFeatured: true,
    collectionKicker: 'Menswear Tailoring',
    description:
      'Sharp peak-lapel double-breasted jacket built on a floating horsehair canvas for structured drape through the shoulders and an elongated waist.',
    composition: '100% Super 130s Virgin Wool. Dry clean only.',
    origin: 'Tailored in Milan, Italy.',
    image: EDITORIAL_IMAGES.mensTailoring,
    gallery: [
      EDITORIAL_IMAGES.mensTailoring,
      EDITORIAL_IMAGES.sandTailoredBlazer,
    ],
    colors: [
      { name: 'Charcoal Black', swatchClass: 'bg-primary' },
      { name: 'Warm Sand', swatchClass: 'bg-surface-variant' },
    ],
    sizes: [
      { label: 'XS', available: false },
      { label: 'S', available: true },
      { label: 'M', available: true },
      { label: 'L', available: true },
      { label: 'XL', available: true },
    ],
    defaultSize: 'M',
  },
  {
    id: 'gabardine-atelier-trench',
    name: 'Gabardine Atelier Trench',
    subtitle: 'Muted Sand',
    department: 'men',
    category: 'outerwear',
    categoryLabel: 'Outerwear',
    price: 820,
    isNewArrival: true,
    collectionKicker: 'Menswear Outerwear',
    description:
      'Water-repellent organic cotton gabardine trench with raglan sleeves, storm welt pockets, and a removable wool-blend warmer lining.',
    composition: '100% High-Density Organic Cotton Gabardine.',
    origin: 'Crafted in Northern Italy.',
    image: EDITORIAL_IMAGES.mensModernTailoring,
    gallery: [
      EDITORIAL_IMAGES.mensModernTailoring,
      EDITORIAL_IMAGES.hero,
    ],
    colors: [
      { name: 'Muted Sand', swatchClass: 'bg-surface-variant' },
      { name: 'Charcoal Black', swatchClass: 'bg-primary' },
    ],
    sizes: [
      { label: 'XS', available: true },
      { label: 'S', available: true },
      { label: 'M', available: true },
      { label: 'L', available: true },
      { label: 'XL', available: false },
    ],
    defaultSize: 'M',
  },
  {
    id: 'fine-merino-crewneck',
    name: 'Fine Merino Crewneck',
    subtitle: 'Charcoal Slate',
    department: 'men',
    category: 'knitwear',
    categoryLabel: 'Knitwear',
    price: 260,
    collectionKicker: 'Menswear Knitwear',
    description:
      '14-gauge seamless crewneck knitted from extra-fine Zegna Baruffa merino wool with ribbed cuffs and subtle saddle-shoulder detailing.',
    composition: '100% Extra-Fine Merino Wool (Cashmere-touch finish).',
    origin: 'Spun & knitted in Piedmont, Italy.',
    image: EDITORIAL_IMAGES.fineMerinoCrewneck,
    gallery: [
      EDITORIAL_IMAGES.fineMerinoCrewneck,
      EDITORIAL_IMAGES.cashmereKnitwear,
    ],
    colors: [
      { name: 'Charcoal Slate', swatchClass: 'bg-primary-container' },
      { name: 'Warm Oatmeal', swatchClass: 'bg-surface-variant' },
    ],
    sizes: [
      { label: 'XS', available: true },
      { label: 'S', available: true },
      { label: 'M', available: true },
      { label: 'L', available: true },
      { label: 'XL', available: true },
    ],
    defaultSize: 'M',
  },
  {
    id: 'pleated-virgin-wool-trousers',
    name: 'Pleated Virgin Wool Trousers',
    subtitle: 'Deep Charcoal',
    department: 'men',
    category: 'tailoring',
    categoryLabel: 'Tailoring',
    price: 320,
    collectionKicker: 'Menswear Tailoring',
    description:
      'Relaxed full-leg trousers with deep double front pleats, side-tab waist adjusters, and crisp pressed creases for fluid movement.',
    composition: '100% Virgin Wool Flannel.',
    origin: 'Tailored in Milan, Italy.',
    image: EDITORIAL_IMAGES.womensFluidSilhouettes,
    gallery: [
      EDITORIAL_IMAGES.womensFluidSilhouettes,
      EDITORIAL_IMAGES.mensTailoring,
    ],
    colors: [
      { name: 'Deep Charcoal', swatchClass: 'bg-primary' },
      { name: 'Muted Sand', swatchClass: 'bg-surface-variant' },
    ],
    sizes: [
      { label: 'XS', available: true },
      { label: 'S', available: true },
      { label: 'M', available: true },
      { label: 'L', available: true },
      { label: 'XL', available: false },
    ],
    defaultSize: 'M',
  },
  {
    id: 'mens-atelier-weekender',
    name: 'Atelier Calfskin Weekender',
    subtitle: 'Warm Taupe',
    department: 'men',
    category: 'accessories',
    categoryLabel: 'Outerwear & Carry',
    price: 540,
    collectionKicker: 'Atelier Leather',
    description:
      'Structured architectural travel carryall in supple full-grain calfskin with reinforced bridle handles and brushed palladium hardware.',
    composition: '100% Full-Grain Italian Calfskin.',
    origin: 'Handcrafted in Florence, Italy.',
    image: EDITORIAL_IMAGES.calfskinTote,
    gallery: [
      EDITORIAL_IMAGES.calfskinTote,
      EDITORIAL_IMAGES.mensModernTailoring,
    ],
    colors: [
      { name: 'Warm Taupe', swatchClass: 'bg-tertiary' },
      { name: 'Charcoal Black', swatchClass: 'bg-primary' },
    ],
    sizes: [{ label: 'OS', available: true }],
    defaultSize: 'OS',
  },
  {
    id: 'oatmeal-cashmere-pullover',
    name: 'Oatmeal Cashmere Pullover',
    subtitle: 'Soft Ivory',
    department: 'women',
    category: 'knitwear',
    categoryLabel: 'Knitwear',
    price: 420,
    isNewArrival: true,
    collectionKicker: 'The Cashmere Edit',
    description:
      'Relaxed dropped-shoulder pullover spun from two-ply Inner Mongolian cashmere for weightless warmth and a softly brushed handfeel.',
    composition: '100% Grade-A Mongolian Cashmere.',
    origin: 'Knitted in Northern Italy.',
    image: EDITORIAL_IMAGES.cashmereKnitwear,
    gallery: [
      EDITORIAL_IMAGES.cashmereKnitwear,
      EDITORIAL_IMAGES.cashmereCapsuleBanner,
    ],
    colors: [
      { name: 'Soft Ivory', swatchClass: 'bg-surface-container-low' },
      { name: 'Warm Camel', swatchClass: 'bg-tertiary' },
    ],
    sizes: [
      { label: 'XS', available: true },
      { label: 'S', available: true },
      { label: 'M', available: true },
      { label: 'L', available: true },
      { label: 'XL', available: false },
    ],
    defaultSize: 'S',
  },
  {
    id: 'camel-wool-wrap-coat',
    name: 'Camel Wool Wrap Coat',
    subtitle: 'Muted Camel',
    department: 'women',
    category: 'outerwear',
    categoryLabel: 'Outerwear',
    price: 790,
    collectionKicker: 'Atelier Icons',
    description:
      'Longline wrap coat crafted in double-faced virgin wool and cashmere with hand-pick-stitched lapels and a sweeping midi hem.',
    composition: '80% Virgin Wool, 20% Cashmere.',
    origin: 'Crafted in Milan, Italy.',
    image: EDITORIAL_IMAGES.signatureOuterwear,
    gallery: [
      EDITORIAL_IMAGES.signatureOuterwear,
      EDITORIAL_IMAGES.cashmereBeltedCoat,
    ],
    colors: [
      { name: 'Muted Camel', swatchClass: 'bg-tertiary' },
      { name: 'Warm Oatmeal', swatchClass: 'bg-surface-variant' },
    ],
    sizes: [
      { label: 'XS', available: true },
      { label: 'S', available: true },
      { label: 'M', available: true },
      { label: 'L', available: true },
      { label: 'XL', available: false },
    ],
    defaultSize: 'S',
  },
  {
    id: 'wide-leg-tailored-trousers',
    name: 'Wide-Leg Tailored Trousers',
    subtitle: 'Charcoal Wool',
    department: 'women',
    category: 'dresses',
    categoryLabel: 'Tailoring & Silk',
    price: 340,
    collectionKicker: 'Fluid Silhouettes',
    description:
      'High-waisted wide-leg trousers in fluid tropical-weight wool crepe, finished with clean concealed hook-and-bar fastening.',
    composition: '100% Virgin Wool Crepe.',
    origin: 'Tailored in Milan, Italy.',
    image: EDITORIAL_IMAGES.womensFluidSilhouettes,
    gallery: [
      EDITORIAL_IMAGES.womensFluidSilhouettes,
      EDITORIAL_IMAGES.ivorySilkDress,
    ],
    colors: [
      { name: 'Charcoal Wool', swatchClass: 'bg-primary' },
      { name: 'Champagne Ivory', swatchClass: 'bg-surface-container-low' },
    ],
    sizes: [
      { label: 'XS', available: true },
      { label: 'S', available: true },
      { label: 'M', available: true },
      { label: 'L', available: true },
      { label: 'XL', available: false },
    ],
    defaultSize: 'S',
  },
];

export const INITIAL_CART_ITEMS: CartItem[] = [
  {
    productId: 'cashmere-belted-coat',
    name: 'Cashmere Belted Coat',
    color: 'Warm Oatmeal',
    size: 'S',
    price: 680,
    quantity: 1,
    image: EDITORIAL_IMAGES.cashmereBeltedCoat,
  },
  {
    productId: 'sand-tailored-blazer',
    name: 'Sand Tailored Blazer',
    color: 'Muted Beige',
    size: 'M',
    price: 495,
    quantity: 1,
    image: EDITORIAL_IMAGES.sandTailoredBlazer,
  },
];

export const TRENDING_EDITS = [
  {
    id: 'mens-tailoring-edit',
    kicker: 'Menswear Edit',
    title: 'Architectural Tailoring',
    description: 'Structured charcoal blazers and relaxed wool trousers.',
    image: EDITORIAL_IMAGES.mensTailoring,
    targetRoute: 'men' as const,
  },
  {
    id: 'womens-cashmere-edit',
    kicker: 'Womenswear Edit',
    title: 'Pure Cashmere Knitwear',
    description: 'Weightless oatmeal knits spun in northern Italy.',
    image: EDITORIAL_IMAGES.cashmereKnitwear,
    targetRoute: 'women' as const,
  },
  {
    id: 'signature-outerwear-edit',
    kicker: 'Atelier Icons',
    title: 'Signature Outerwear',
    description: 'Timeless belted trenches and double-faced wool coats.',
    image: EDITORIAL_IMAGES.signatureOuterwear,
    targetRoute: 'women' as const,
  },
];

export const formatCurrency = (amount: number): string =>
  '$' +
  amount.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
