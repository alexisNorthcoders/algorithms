public class WordIndexFinder {
    public static int findWordIndex(String string, String word) {
        String[] stringSplit = string.split(" ");

        for (int index = 0; index < stringSplit.length; index++) {
            String element = stringSplit[index];
            if (element.equals(word)) {
                return index + 1;
            }
        }
        return 0;
    }

    public static void main(String[] args) {
        String inputString = "the dog is hiding in this string";
        String searchWord = "dog";
        int index = findWordIndex(inputString, searchWord);
        System.out.println("The index of the word '" + searchWord + "' is: " + index);
    }
}