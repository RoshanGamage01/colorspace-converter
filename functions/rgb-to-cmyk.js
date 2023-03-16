function rgbToCmyk(R, G, B) {
    (R /= 255), (G /= 255), (B /= 255)
    const max = Math.max(R, G, B);

    let K = (1 - max),
        C = ((1 - R - K) / (1 - K)) * 100,
        M = ((1 - G - K) / (1 - K)) * 100,
        Y = ((1 - B - K) / (1 - K)) * 100
      
    return [~~C, ~~M, ~~Y, ~~(K*100)];
 }