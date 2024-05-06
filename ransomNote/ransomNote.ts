export default function ransomNote(
  ransomNote: string,
  magazine: string
): boolean {
  const lettermaps: { [key: string]: number } = {};
  for (let i = 0; i < magazine.length; i++) {
    lettermaps[magazine[i]] = (lettermaps[magazine[i]] ?? 0) + 1}
  for (let i = 0; i < ransomNote.length; i++) {
    if (lettermaps[ransomNote[i]]) {
      lettermaps[ransomNote[i]]--;
    } else {
      return false;
    }
  }
  return true;
}
