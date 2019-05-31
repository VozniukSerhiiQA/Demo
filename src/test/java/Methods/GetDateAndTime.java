package Methods;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

public class GetDateAndTime {

    public static String value() {
        //Get Date
        Date date = Calendar.getInstance().getTime();
        DateFormat dateFormat = new SimpleDateFormat("MMMddyyyyhhmmss");
        String variable_date = dateFormat.format(date);
        System.out.println(variable_date);
        return variable_date;
    }
}
