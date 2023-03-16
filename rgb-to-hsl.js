function rgbToHSL(r, g, b){
  (r/=255), (g /= 255), (b /=255);

  const min = Math.min(r, g, b),
        max = Math.max(r, g, b);

  let luminanceRange = max - min;
  let totalLuminance = max + min;
  let _2totalLuminence = 2 - totalLuminance;

  let h,
      s,
      l = totalLuminance / 2;

  if(min == max) {
    h = s = 0;
  }else{
    s = l > 0.5 ? luminanceRange / _2totalLuminence : luminanceRange / totalLuminance;

    if (r == max){
      h = (g - b) / luminanceRange + (g < b ? 6 : 0);
    }
    else if (g == max) {
      h = ((b - r) / luminanceRange) + 2;
    }
    else if(b == max) {
      h = ((r - g) / luminanceRange) + 4;
    }

    h = Math.round(h*60, 2);

    if (h < 0){
      h + 360;
    }else{
      h;
    }
  }

  return [h, Math.round(s*100), ~~(l*100)];
}
