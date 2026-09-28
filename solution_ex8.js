const portIds = ['S01', 'S02', 'S03', 'S04', 'S05', 'S06'];

const portStatuses = [
  'AVAILABLE',
  'CHARGING',
  'ERROR',
  'AVAILABLE',
  'CHARGING',
  'AVAILABLE'
];

const portPowersKw = [250, 150, 60, 250, 60, 150];

// Xe cắm vào S01
const indexS01 = portIds.indexOf('S01');
portStatuses[indexS01] = 'CHARGING';

// S03 sửa xong
const indexS03 = portIds.indexOf('S03');
portStatuses[indexS03] = 'AVAILABLE';

// Thống kê
let availableCount = 0;
let maxPower = 0;
let maxPort = '';

for (let i = 0; i < portIds.length; i++) {
  console.log(
    `${portIds[i]} | Trạng thái: ${portStatuses[i]} | Công suất: ${portPowersKw[i]} kW`
  );

  if (portStatuses[i] === 'AVAILABLE') {
    availableCount++;

    if (portPowersKw[i] > maxPower) {
      maxPower = portPowersKw[i];
      maxPort = portIds[i];
    }
  }
}

console.log('----------------------------');
console.log('Tổng trụ AVAILABLE:', availableCount);
console.log('Trụ có công suất khả dụng cao nhất:', maxPort);
console.log('Công suất:', maxPower, 'kW');