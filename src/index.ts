/**
 * Converted from https://github.com/Chysn/sequential_lib/blob/main/sequential_packing.h#L84
 * @param data
 */
export const unpackageMidi = (data: Uint8Array): Uint8Array => {
  const SEQUENTIAL_DATA_MAX = 128000;

  const values: Uint8Array = new Uint8Array(data.length - 1);
  let packbyte = 0;
  let pos = 0;
  let size = 0;
  for (let i = 0; i < data.length; i++) {
    let currentByte = data[i];

    if (pos === 0) {
      packbyte = currentByte;
    } else {
      if (packbyte & (1 << (pos - 1))) {
        currentByte |= 0x80;
      }
      values[size++] = currentByte;
    }

    pos++;
    pos &= 0x07;
    if (size > SEQUENTIAL_DATA_MAX) {
      break;
    }
  }
  return values;
};
