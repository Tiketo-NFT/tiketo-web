import img0 from './0.png';
import img1 from './1.png';
import img2 from './2.png';

function example_festivals () {
    return (
        [
          {
            index: 0,
            name: "The Fever - First World Tour in Asia",
            description: "CKay | Jamsil, Seoul, South Korea",
            thumbImg: img0,
            fullImg: img0,
            schedule: new Date(2022, 10, 14).getTime(),
            price: 100,
          },
          {
            index: 1,
            name: "Asia Tour: Veils - Austin Malcom",
            description: "Austin Malcom | Jamsil, Seoul, South Korea",
            thumbImg: img1,
            fullImg: img1,
            schedule: new Date(2022, 10, 26).getTime(),
            price: 300,
          },
          {
            index: 2,
            name: "[Justin X] Seoul Concert: For my XXX forever",
            description: "Justin X | Jamsil, Seoul, South Korea",
            thumbImg: img2,
            fullImg: img2,
            schedule: new Date(2022, 10, 26).getTime(),
            price: 250,
          },
          
        ]
    );
}

export default example_festivals;