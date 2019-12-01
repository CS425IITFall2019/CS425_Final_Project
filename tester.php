<?php
$db = pg_connect("host=127.0.0.1 port = 5432 dbname=FinalProject user=postgres password=spiderman");
if(!$db) {
   echo "Error : Unable to open database\n";
} else {
   echo "Opened database successfully\n;";
}

$query =
   "INSERT INTO customer VALUES ('$_POST[first_name_field]','$_POST[last_name_field]','$_POST[phone_field]','$_POST[email_field]','$_POST[address]',
'$_POST[City]','$_POST[State]','$_POST[Zip_code]')";
$result = pg_query($db,$query);
if (!$result)
{
echo "Update failed!!";
}
else
{
echo "Update Complete;\n";
}

$db->close();
?>
