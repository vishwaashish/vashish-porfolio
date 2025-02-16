const fragmentShader = `
uniform vec3 u_color;
uniform float u_time;
uniform float u_intensity;
varying vec2 vUv;
varying float vDisplacement;

void main() {
    float distort = 2.0 * vDisplacement * u_intensity * sin(vUv.y * 10.0 + u_time);
    // vec3 color = vec3(abs(vUv - 0.5) * 2.0  * (1.0 - distort), 1.0);
    // gl_FragColor = vec4(color, 1.0);

     vec3 proceduralColor = vec3(abs(vUv - 0.5) * 2.0  * (1.0 - distort), 1.0);
    vec3 finalColor = mix(proceduralColor, u_color, 0.5); // 0.5 means 50% mix

    gl_FragColor = vec4(finalColor, 1.0);
}

`;

export default fragmentShader;