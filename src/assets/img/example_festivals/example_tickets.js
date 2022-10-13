import img0 from './0.png';
import img1 from './1.png';
import img2 from './2.png';

function example_tickets () {
    return (
        [
          {
            index: 0,
            seat: 'A03',
            schedule: new Date(2022, 10, 14).getTime(),
            price: 100,
          },
          {
            index: 1,
            seat: 'E08',
            schedule: new Date(2022, 10, 26).getTime(),
            price: 300,
          },
        ]
    );
}

export default example_tickets;