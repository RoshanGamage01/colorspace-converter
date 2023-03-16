function hslToRgb(H, S, L) {
    (S /= 100), (L /= 100)

    const chroma = (1 - 1 * Math.abs((2 * L) - 1)) * S,
        H_ = (H / 60),
        X = chroma * (1 - 1 * Math.abs((H_ % 2) - 1));

    let R1, 
        G1, 
        B1;

    if(0 <= H_ && H_ <= 1){
        R1 = chroma, G1 = X, B1 = 0
    }else if(1 <= H_ && H_ < 2){
        R1 = X, G1 = chroma, B1 = 0
    }else if(2 <= H_ && H_ < 3){
        R1 = 0, G1 = chroma, B1 = X
    }else if(3 <= H_ && H_ < 4){
        R1 = 0, G1 = X, B1 = chroma
    }else if(4 <= H_ && H_ < 5){
        R1 = X, G1 = 0, B1 = chroma
    }else if(5 <= H_ && H_ < 6){
        R1 = chroma, G1 = 0, B1 = X
    }

    let m = L - (chroma / 2)

    let R = (R1 + m) * 255,
        G = (G1 + m) * 255,
        B = (B1 + m) * 255

    return [~~R, ~~G, ~~B]
}
