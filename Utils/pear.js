const { cos, sin, sqrt, pow, PI } = Math

function CreateSurfaceData()
{
    let vertexList = [];

    const NUM_STEPS_BETA = 30,
        NUM_STEPS_Z = 60,
        MAX_BETA = PI * 2,
        MAX_Z = 20,
        STEP_BETA = MAX_BETA / NUM_STEPS_BETA,
        STEP_Z = MAX_Z / NUM_STEPS_Z

    for (let beta = 0; beta < MAX_BETA; beta += STEP_BETA) {
        for (let z = 1; z < MAX_Z; z += STEP_Z) {
            let vertex = pearVertex(z, beta)
            vertexList.push(...vertex)
        }
    }

    return vertexList;
}

const a = 20
const b = 20
const scaler = 0.1;

function r(z) {
    return z * sqrt(z * (a - z)) / b
}

function pearVertex(z, beta) {
    console.log(r(z))
    let x = r(z) * sin(beta),
        y = r(z) * cos(beta),
        cZ = z;
    return [scaler * x, scaler * y, scaler * cZ];
}
