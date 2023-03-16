function cmykToRgb(C, M, Y, K) {
    (C /= 100), (M /= 100), (Y /= 100), (K /= 100)

    let R = Math.round(255 * (1 - C) * (1 - K)),
        G = Math.round(255 * (1 - M) * (1 - K)),
        B = Math.round(255 * (1 - Y) * (1 - K));

    return [R, G, B]
}