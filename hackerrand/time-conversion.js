/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
    const time = s.slice(0,8).split(':');
    time[0] = (s.indexOf('PM') > -1 ) ? 
        (time[0] == 12 ? '12' : Number(time[0]) + 12) :
        (time[0] == 12 ? '00' : time[0]);
    return time.join(':');

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}