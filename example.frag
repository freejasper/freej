precision highp float;

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouseXY;
uniform vec2 u_mouseDist;

varying vec2 pos;

float timeRate = u_time * 0.0001;

// Random noise function
float rand(vec2 c) {
    return fract(sin(dot(c.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

// 2D noise function
float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    float a = rand(i);
    float b = rand(i + vec2(1.0, 0.0));
    float c = rand(i + vec2(0.0, 1.0));
    float d = rand(i + vec2(1.0, 1.0));
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}


void main() {
    vec2 xy = gl_FragCoord.xy / u_resolution.xy;
    
    float distanceFromMouse = distance(pos, u_mouseDist);

    //adding noise map
    float nMap = noise(pos * 10. + timeRate);
    float nMapS = smoothstep(0.3, 1.2, nMap);

    distanceFromMouse -= noise(vec2(pos.y * 1.5 + timeRate * 1.2, pos.x * 1.5 + nMapS * 0.1));    
    
    float redC = ((sin(distanceFromMouse * 15.) + 1.) / 2.);

    float redCOffset = (redC + 5.5) / 2.;
    float blueC = ((sin((redCOffset + timeRate) * 7.5)) * 0.65);
    float greenC = blueC * sin(nMapS + distanceFromMouse * 10.);

    greenC += mix(blueC, redC, 0.5);


    //computing grid
    vec2 coord = mod(gl_FragCoord.xy, 10.);
    float gridDist = length(coord - 5.);


    if (gridDist > 1.0)  {
        redC *= 0.75;
        blueC *= 0.75;
        greenC *= 0.3;
    } else {
        greenC *= 0.5;
    }
    


    // Output colours
    gl_FragColor = vec4(redC, greenC, blueC, 1.);
}
