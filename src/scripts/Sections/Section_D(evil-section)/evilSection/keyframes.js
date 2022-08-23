export const keyframes = [15, -12, -52, -78, -123.5, -199, -266, -920];
export const progress = {
    sawTransform: {
        x: [
            0,
            2.5 * (keyframes[0]),
            2.5 * (keyframes[0] - keyframes[1]),
            2.5 * (keyframes[0] - keyframes[1] + keyframes[2]),
            2.5 * (keyframes[0] - keyframes[1] + keyframes[2] - keyframes[3]),
            2.5 * (keyframes[0] - keyframes[1] + keyframes[2] - keyframes[3]) + 2 * keyframes[4]
        ],
        y: [
            -70,
            -70 + 0.75 * keyframes[0],
            -70 + 0.75 * (keyframes[0] - keyframes[1]),
            -70 + 0.75 * (keyframes[0] - keyframes[1] + keyframes[2]),
            -70 + 0.75 * (keyframes[0] - keyframes[1] + keyframes[2] - keyframes[3]),
            -70 + 0.75 * (keyframes[0] - keyframes[1] + keyframes[2] - keyframes[3]),
        ],
        angle: [-70, -70, -70, -70, -70, -70 + keyframes[4] / 3]
    },
    headTransform: {
        y: [0, 0, 0, 0, keyframes[3] / 2, keyframes[3] / 2, (keyframes[3] - keyframes[5]) / 2],
        angle: [0, 0, 0, 0, keyframes[3] / 4, keyframes[3] / 4, (keyframes[3] - keyframes[5]) / 4 ],
    },
    logTransform: [0, 0, 0, 0, 0, keyframes[5] / 3, (keyframes[5] -keyframes[6]) / 3],
    sticky: [0, 0, 0, 0, 0, 0, -keyframes[5] / 3, - (keyframes[5] - keyframes[6]) / 3],
}; 