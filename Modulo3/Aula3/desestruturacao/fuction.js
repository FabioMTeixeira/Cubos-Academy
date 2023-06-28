

function area({ base, height }) {
    return base * height
}

const rectangles = [
    {
        base: 30,
        height: 15
    },
    {
        base: 40,
        height: 65
    },
    {
        base: 24,
        height: 7
    }
]

for (const rectangle of rectangles) {
    console.log(area(rectangle));
}