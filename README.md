# Projekt Webapp mit Bahn-API

Ziel des Projektes ist es, am Ende eine kleine Webseite/Webapp zu haben,
auf der ein Nutzer sich An- und Abfahrtszeiten eines Wunschbahnhofes
ausgeben lassen kann. Außerdem soll angezeigt werden, ob am
Wunschbahnhof ein Fahrstuhl vorhanden ist.

Setting\
Gruppengröße: bis zu 3 Personen, weniger ist möglich

Zeitrahmen: 6 Unterrichtsblöcke + Heimarbeit bei Zeitmangel

Abgaben: Quellcode des Projekts, Dokumentation und Arbeitsnachweis

Noten: eine für das Ergebnis (Funktionalität), eine für den Code
(Sauberkeit, Kommentierung, Eigenleistung) und eine für die
Dokumentation -- Insgesamt also 3 Noten

Aufgabenstellungen Funktionalität\
Entwickeln Sie eine Webseite, die die API der Deutschen Bahn nutzt.

**[Mindestanforderungen:]{.ul}**

+----+----------------------------------------------------------------+
| \- | \- Aufrufbare Webseite (lokal ausreichend, also nicht auf      |
|    | Webserver) **\[1P\]**                                          |
+====+================================================================+
| \- | \- Grundgerüst aus HTML zum Aufbau der Seitenstruktur          |
|    | **\[2P\]**                                                     |
+----+----------------------------------------------------------------+
| \- | Eine Funktion, mit der man einen beliebigen deutschen Bahnhof  |
|    | aussuchen kann (Feld zum                                       |
+----+----------------------------------------------------------------+
| \- | > Eintragen oder vergleichbares) **\[2P\]**                    |
+----+----------------------------------------------------------------+
|    | > Eine Funktion, bei der man ein Datum eingeben kann (Feld zum |
|    | > Eintragen oder vergleichbar)                                 |
+----+----------------------------------------------------------------+
| \- | > **\[2P\]**                                                   |
+----+----------------------------------------------------------------+
|    | > Eine Funktion, mit der man sich nun entweder die An- oder    |
|    | > die Abfahrtszeiten an diesem                                 |
+----+----------------------------------------------------------------+
| \- | > Bahnhof an diesem Datum anzeigen lassen kann (Uhrzeit,       |
|    | > Zugart,                                                      |
+----+----------------------------------------------------------------+
|    | > Herkunftsbahnhof/Zielbahnhof, Gleis) oder beides zusammen.   |
|    | > **\[10P\]**                                                  |
+----+----------------------------------------------------------------+
|    | > Eine Funktion, die ausgibt, ob es an dem ausgesuchten        |
|    | > Bahnhof einen Fahrstuhl zum Gleis                            |
+----+----------------------------------------------------------------+
| \- | > gibt. **\[8P\]**                                             |
+----+----------------------------------------------------------------+
|    | > Mindestens eine rudimentäre CSS-Datei, welche im HTML        |
|    | > eingebunden ist. Design ist aber                             |
+----+----------------------------------------------------------------+
|    | > ausdrücklich NICHT Teil der Mindestanforderungen **\[1P\]**  |
+----+----------------------------------------------------------------+

Mit erreichen der Mindestanforderungen erhalten Sie 26 Punkte und damit
die Note 4 für Funktionalität. Folgender Notenschlüssel wird dabei
verwendet:

+---------+---------+---------+---------+---------+---------+--------+
| Punkte: | 50 - 46 | 45 - 41 | 40 - 34 | 33 - 25 | 24 - 15 | 14 - 0 |
|         |         |         |         |         |         |        |
| Note:   | 1       | 2       | 3       | 4       | 5       |        |
+=========+=========+=========+=========+=========+=========+========+
|         |         |         |         |         |         | 6      |
+---------+---------+---------+---------+---------+---------+--------+

**[Weitere Punkte:]{.ul}**

Sie bekomme weitere Punkte für den Ausbau der Webseite. Dies sind nur
Beispiele. Sie haben recht freie Kreativität.

+----+----------------------------------------------------------------+
| \- | \- Weitere Funktionalitäten mit den APIs oder anderen APIs der |
|    | Bahn                                                           |
+====+================================================================+
| \- | > Design und Nutzerfreundlichkeit                              |
+----+----------------------------------------------------------------+
| \- | > Ausbau der Funktionen der Mindestanforderungen, z.B. Angabe  |
|    | > eine Uhrzeit, Routenangabe                                   |
+----+----------------------------------------------------------------+
| \- | > usw.                                                         |
+----+----------------------------------------------------------------+
|    | > Weitere Angaben zu Stationsdetails                           |
+----+----------------------------------------------------------------+
| \- | > Ticketanzeige mit Preisgestaltung usw.                       |
+----+----------------------------------------------------------------+

**[Erlaubt sind:]{.ul}**

+----+----------------------------------------------------------------+
| \- | \- Frameworks für Design (bootstrap, note.js, angular und nach |
|    | Absprache)                                                     |
+====+================================================================+
| \- | > JavaScript-Programmierung                                    |
+----+----------------------------------------------------------------+
| \- | > PHP-Programmierung                                           |
+----+----------------------------------------------------------------+
| \- | > Abgesprochene Dinge                                          |
+----+----------------------------------------------------------------+

Aufgabenstellung Arbeitsnachweis\
Sie haben einen tabellarischen Nachweis Ihrer Tätigkeiten zu führen.
Dieser kann wie folgt aussehen:

+-------------+-------------+-------------+------------+-------------+
| >           | > **M       | > **Bes     | > **Zeit** | > **Datum** |
| **Aufgabe** | itglieder** | chreibung** |            |             |
+=============+=============+=============+============+=============+
| > **HTML    | Schmidt,    | > Aufbau    | > 2h       | >           |
| >           | Winkler     | > der       |            |  12.05.2022 |
|  Struktur** |             | > HTML-Gr   |            |             |
|             |             | undstruktur |            |             |
+-------------+-------------+-------------+------------+-------------+
| > **API     | > Kurz,     | > Einbinden | > 4h       | >           |
| > E         | > Schmidt   | > der\      |            |  13.05.2022 |
| inbindung** |             | > Sta       |            |             |
|             |             | tionsdaten\ |            |             |
|             |             | >           |            |             |
|             |             | (Fahrstuhl) |            |             |
|             |             | > in PHP    |            |             |
+-------------+-------------+-------------+------------+-------------+
| > **...**   |             |             |            |             |
+-------------+-------------+-------------+------------+-------------+
| > **...**   |             |             |            |             |
+-------------+-------------+-------------+------------+-------------+
| > **...**   |             |             |            |             |
+-------------+-------------+-------------+------------+-------------+

Aufgabenstellung Dokumentation\
Sie sollen eine Dokumentation zu ihrem Projekt anfertigen. Dabei sollen
Funktionalität, Aufbau, essenzielle Code-Teile und ggf.
Ausbaumöglichkeiten beschrieben sein. Stellen Sie sich dafür vor, Sie
bekommen alle Projektdaten von einem Kollegen und sollen diesen nun
erweitern. Sie haben vorher absolut nichts mit diesem Projekt zu tun
gehabt. Schreiben Sie die Dokumentation so, dass Sie sich ohne Probleme
in das Projekt einarbeiten und dieses erweitern könnten.

Die Dokumentationsbewertung wird von der Klasse durchgeführt.

Bei Fragen: Klassendiscord, Discord Herr Brunck oder
brunck\@bbsovg-magdeburg.de
