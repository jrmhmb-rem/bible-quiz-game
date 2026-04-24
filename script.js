// ========================
// QUIZ DATA
// ========================
// ========================
// Bible quiz questions
// ========================
let quiz = [
{q:"Who built the ark?", a:["Noah","Moses","David","Paul"], correct:0, verse:"Genesis 6:22 — Thus did Noah; according to all that God commanded him."},
{q:"Who killed Goliath?", a:["Saul","David","Samuel","Peter"], correct:1, verse:"1 Samuel 17:50 — So David prevailed over the Philistine with a sling and with a stone."},
{q:"Where was Jesus born?", a:["Nazareth","Bethlehem","Jerusalem","Rome"], correct:1, verse:"Luke 2:11 — For unto you is born this day in the city of David a Saviour."},
{q:"Who betrayed Jesus?", a:["Peter","Judas","Thomas","James"], correct:1, verse:"Matthew 26:14 — Then one of the twelve, called Judas Iscariot."},
{q:"Who parted the Red Sea?", a:["Moses","Joshua","Aaron","David"], correct:0, verse:"Exodus 14:21 — Moses stretched out his hand over the sea."},
{q:"Who was the first man?", a:["Adam","Noah","Joseph","Samuel"], correct:0, verse:"Genesis 2:7 — And the LORD God formed man of the dust of the ground."},
{q:"Who was the first woman?", a:["Mary","Eve","Sarah","Rebekah"], correct:1, verse:"Genesis 2:22 — And the rib, which the LORD God had taken from man, made he a woman."},
{q:"Strongest man in the Bible?", a:["David","Samson","Saul","Peter"], correct:1, verse:"Judges 16:3 — Samson arose at midnight, and took the doors of the gate."},
{q:"Who interpreted Pharaoh's dreams?", a:["Joseph","Daniel","Moses","Joshua"], correct:0, verse:"Genesis 41:25 — God hath shewed Pharaoh what he is about to do."},
{q:"Who was swallowed by a fish?", a:["Jonah","Peter","Paul","Elijah"], correct:0, verse:"Jonah 1:17 — The LORD had prepared a great fish to swallow up Jonah."},
{q:"Last book of the Bible?", a:["Revelation","Jude","Acts","Romans"], correct:0, verse:"Revelation 1:1 — The Revelation of Jesus Christ."},
{q:"How many days did it rain during Noah's flood?", a:["20","30","40","60"], correct:2, verse:"Genesis 7:12 — And the rain was upon the earth forty days and forty nights."},
{q:"Who was Abraham's son of promise?", a:["Ishmael","Isaac","Jacob","Joseph"], correct:1, verse:"Genesis 21:12 — In Isaac shall thy seed be called."},
{q:"Who wrestled with an angel?", a:["Moses","Jacob","Joseph","David"], correct:1, verse:"Genesis 32:28 — Thy name shall be called no more Jacob, but Israel."},
{q:"Who led Israel into the Promised Land?", a:["Joshua","Moses","Aaron","Samuel"], correct:0, verse:"Joshua 1:6 — For unto this people shalt thou divide for an inheritance the land."},
{q:"Who built the temple in Jerusalem?", a:["David","Saul","Solomon","Hezekiah"], correct:2, verse:"1 Kings 6:1 — Solomon began to build the house of the LORD."},
{q:"Who survived the lions' den?", a:["Isaiah","Jeremiah","Daniel","Ezekiel"], correct:2, verse:"Daniel 6:22 — My God hath sent his angel, and hath shut the lions' mouths."},
{q:"Who was thrown into the fiery furnace?", a:["Shadrach, Meshach, Abednego","Daniel","Isaiah","Jeremiah"], correct:0, verse:"Daniel 3:25 — I see four men loose, walking in the midst of the fire."},
{q:"Who anointed David as king?", a:["Samuel","Nathan","Elijah","Elisha"], correct:0, verse:"1 Samuel 16:13 — Samuel took the horn of oil, and anointed him."},
{q:"Who was the first king of Israel?", a:["Saul","David","Solomon","Samuel"], correct:0, verse:"1 Samuel 10:24 — See ye him whom the LORD hath chosen."},
{q:"Who was the wisest king?", a:["David","Saul","Solomon","Hezekiah"], correct:2, verse:"1 Kings 4:29 — God gave Solomon wisdom and understanding."},
{q:"Who prepared the way for Jesus?", a:["John the Baptist","Peter","Paul","Matthew"], correct:0, verse:"Matthew 3:1 — John the Baptist preaching in the wilderness."},
{q:"How many disciples did Jesus have?", a:["10","11","12","13"], correct:2, verse:"Luke 6:13 — He chose twelve, whom also he named apostles."},
{q:"Who walked on water with Jesus?", a:["John","Peter","James","Andrew"], correct:1, verse:"Matthew 14:29 — Peter walked on the water, to go to Jesus."},
{q:"Who denied Jesus three times?", a:["John","Peter","Thomas","Andrew"], correct:1, verse:"Luke 22:61 — Peter remembered the word of the Lord."},
{q:"Who doubted Jesus' resurrection?", a:["Thomas","Peter","James","John"], correct:0, verse:"John 20:25 — Except I shall see... I will not believe."},
{q:"Who climbed a tree to see Jesus?", a:["Nicodemus","Zacchaeus","Matthew","Mark"], correct:1, verse:"Luke 19:4 — Zacchaeus ran before, and climbed up into a sycomore tree."},
{q:"What miracle did Jesus perform first?", a:["Walking on water","Turning water into wine","Healing blind man","Feeding 5000"], correct:1, verse:"John 2:9 — The water that was made wine."},
{q:"Who wrote many New Testament letters?", a:["Peter","Paul","John","Luke"], correct:1, verse:"Romans 1:1 — Paul, a servant of Jesus Christ."},
{q:"Who was Paul's missionary partner?", a:["Barnabas","Peter","James","John"], correct:0, verse:"Acts 13:2 — Separate me Barnabas and Saul."},
{q:"Who was the tax collector that became a disciple?", a:["Matthew","Luke","Mark","Thomas"], correct:0, verse:"Matthew 9:9 — Jesus saw a man named Matthew."},
{q:"Who wrote Revelation?", a:["Peter","John","Paul","James"], correct:1, verse:"Revelation 1:1 — The Revelation of Jesus Christ."},
{q:"Who saw the burning bush?", a:["Moses","Aaron","Joshua","Samuel"], correct:0, verse:"Exodus 3:2 — The angel of the LORD appeared unto him in a flame of fire."},
{q:"Who was Moses' brother?", a:["Aaron","Joshua","Caleb","Samuel"], correct:0, verse:"Exodus 4:14 — Aaron the Levite."},
{q:"What river was Jesus baptized in?", a:["Jordan","Nile","Euphrates","Tigris"], correct:0, verse:"Matthew 3:13 — Jesus came from Galilee to Jordan."},
{q:"Who fed 5000 people?", a:["Jesus","Peter","Paul","John"], correct:0, verse:"Matthew 14:19 — He blessed, and brake, and gave the loaves."},
{q:"Who was freed from prison by an angel?", a:["Peter","Paul","John","James"], correct:0, verse:"Acts 12:7 — The angel of the Lord came upon him."},
{q:"Who replaced Judas as apostle?", a:["Matthias","Barnabas","Luke","Mark"], correct:0, verse:"Acts 1:26 — The lot fell upon Matthias."},
{q:"Who was thrown into prison for preaching?", a:["Peter","Paul","John","Stephen"], correct:3, verse:"Acts 7:59 — Stephen was stoned for his faith."},
{q:"Who was Jesus’ mother?", a:["Mary","Elizabeth","Martha","Anna"], correct:0, verse:"Luke 1:27 — To a virgin espoused to a man whose name was Joseph."},
{q:"Who denied Jesus in the courtyard?", a:["John","Peter","James","Andrew"], correct:1, verse:"Luke 22:56 — Peter denied Him thrice."},
{q:"Who baptized Jesus?", a:["John the Baptist","Peter","Paul","Andrew"], correct:0, verse:"Matthew 3:13 — Then cometh Jesus from Galilee to Jordan unto John."},
{q:"Which disciple walked on water?", a:["Peter","John","James","Matthew"], correct:0, verse:"Matthew 14:29 — Peter walked on the water."},
{q:"Who was Saul before Paul?", a:["King","Pharisee","Roman","Tax Collector"], correct:1, verse:"Acts 8:3 — Saul persecuted the church."},
{q:"Who wrote most of the Psalms?", a:["David","Solomon","Moses","Asaph"], correct:0, verse:"Psalm 72:1 — David wrote many psalms."},
{q:"Who is called 'The Beloved Disciple'?", a:["John","Peter","James","Andrew"], correct:0, verse:"John 13:23 — The disciple whom Jesus loved."},
{q:"Who was cast into prison by Pharaoh?", a:["Joseph","Moses","Daniel","Aaron"], correct:0, verse:"Genesis 39:20 — Joseph was put in prison."},
{q:"Who wrestled with God?", a:["Jacob","Esau","Abraham","Isaac"], correct:0, verse:"Genesis 32:24 — Jacob wrestled with God."},
{q:"Who was king during Jesus’ birth?", a:["Herod","Caesar","David","Solomon"], correct:0, verse:"Matthew 2:1 — Herod was king in Judea."},
{q:"Who betrayed Samson?", a:["Delilah","Ruth","Martha","Miriam"], correct:0, verse:"Judges 16:18 — Delilah betrayed Samson."},
{q:"Who built the first altar?", a:["Noah","Abel","Cain","Abraham"], correct:1, verse:"Genesis 4:4 — Abel built an altar to the LORD."},
{q:"Who is the first murderer?", a:["Cain","Abel","Seth","Lamech"], correct:0, verse:"Genesis 4:8 — Cain slew Abel."},
{q:"Who was swallowed by a whale?", a:["Jonah","Elijah","Daniel","Peter"], correct:0, verse:"Jonah 1:17 — Jonah was swallowed by a great fish."},
{q:"Who received the Ten Commandments?", a:["Moses","Joshua","Aaron","David"], correct:0, verse:"Exodus 31:18 — Moses received the stone tablets."},
{q:"Who led the Israelites into Canaan?", a:["Joshua","Moses","Caleb","Aaron"], correct:0, verse:"Joshua 1:1 — Joshua led the people."},
{q:"Who killed Abimelech?", a:["Judges 9","Gideon","Samson","Jephthah"], correct:0, verse:"Judges 9:50 — Abimelech was killed by a woman."},
{q:"Who is the first prophet?", a:["Enoch","Moses","Samuel","Elijah"], correct:0, verse:"Genesis 5:24 — Enoch walked with God."},
{q:"Who parted the Jordan River?", a:["Joshua","Elijah","Moses","Aaron"], correct:0, verse:"Joshua 3:17 — The waters of Jordan were cut off."},
{q:"Who did God send to Nineveh?", a:["Jonah","Elijah","Moses","Daniel"], correct:0, verse:"Jonah 1:1 — God sent Jonah to Nineveh."},
{q:"Who was called 'a man after God’s own heart'?", a:["David","Saul","Solomon","Samuel"], correct:0, verse:"1 Samuel 13:14 — David is a man after God's heart."},
{q:"Who was the mother of Samuel?", a:["Hannah","Sarah","Rebekah","Elizabeth"], correct:0, verse:"1 Samuel 1:20 — Hannah bore Samuel."},
{q:"Who interpreted dreams in Babylon?", a:["Daniel","Joseph","Moses","Elijah"], correct:0, verse:"Daniel 2:19 — Daniel interpreted Nebuchadnezzar's dream."},
{q:"Who is the 'weeping prophet'?", a:["Jeremiah","Isaiah","Ezekiel","Daniel"], correct:0, verse:"Jeremiah 9:1 — Jeremiah mourned over Israel."},
{q:"Who was the first Christian martyr?", a:["Stephen","James","Peter","John"], correct:0, verse:"Acts 7:59 — Stephen was stoned."},
{q:"Who denied Jesus before the rooster crowed?", a:["Peter","John","Thomas","Andrew"], correct:0, verse:"Luke 22:61 — Peter denied Him."},
{q:"Who wrote the Book of Acts?", a:["Luke","Paul","John","Matthew"], correct:0, verse:"Acts 1:1 — The former treatise have I made, O Theophilus, of all that Jesus began both to do and teach."},
{q:"Who saw the vision of the sheet with animals?", a:["Peter","Paul","John","James"], correct:0, verse:"Acts 10:11 — Peter saw a sheet let down from heaven."},
{q:"Who was thrown into the lions' den?", a:["Daniel","Shadrach","Meshach","Abednego"], correct:0, verse:"Daniel 6:16 — Daniel was thrown into the lions' den."},
{q:"Who was thrown into the fiery furnace?", a:["Shadrach, Meshach, Abednego","Daniel","Hananiah","Azariah"], correct:0, verse:"Daniel 3:23 — They were cast into the furnace."},
{q:"Who led Israel after Moses?", a:["Joshua","Caleb","Aaron","Gideon"], correct:0, verse:"Joshua 1:1 — Joshua succeeded Moses."},
{q:"Who wrote the Book of Revelation?", a:["John","Paul","Peter","James"], correct:0, verse:"Revelation 1:1 — The Revelation of Jesus Christ."},
{q:"Who baptized the Ethiopian eunuch?", a:["Philip","Peter","Paul","John"], correct:0, verse:"Acts 8:38 — Philip baptized the eunuch."},
{q:"Who was Saul of Tarsus?", a:["Paul","Peter","John","Barnabas"], correct:0, verse:"Acts 9:1 — Saul was also called Paul."},
{q:"Who healed Naaman?", a:["Elisha","Elijah","Moses","Aaron"], correct:0, verse:"2 Kings 5:14 — Naaman was healed by washing."},
{q:"Who was the mother of John the Baptist?", a:["Elizabeth","Mary","Anna","Martha"], correct:0, verse:"Luke 1:5 — Elizabeth bore John the Baptist."},
{q:"Who was Abraham’s wife?", a:["Sarah","Rebekah","Leah","Rachel"], correct:0, verse:"Genesis 17:15 — Sarah is Abraham’s wife."},
{q:"Who was Jacob’s favorite son?", a:["Joseph","Benjamin","Reuben","Judah"], correct:0, verse:"Genesis 37:3 — Joseph was Jacob's favorite son."},
{q:"Who wrestled with God?", a:["Jacob","Esau","Abraham","Isaac"], correct:0, verse:"Genesis 32:24 — Jacob wrestled with God."},
{q:"Who was the mother of Samuel?", a:["Hannah","Miriam","Deborah","Esther"], correct:0, verse:"1 Samuel 1:20 — Hannah bore Samuel."},
{q:"Who received manna from heaven?", a:["Israelites","Egyptians","Philistines","Moabites"], correct:0, verse:"Exodus 16:15 — Manna came from heaven."},
{q:"Who was the last judge of Israel?", a:["Samuel","Gideon","Ehud","Deborah"], correct:0, verse:"1 Samuel 7:15 — Samuel judged Israel all his life."},
{q:"Who was Elijah’s successor?", a:["Elisha","Moses","Samuel","Nathan"], correct:0, verse:"2 Kings 2:9 — Elisha took Elijah’s mantle."},
{q:"Who was thrown into prison by King Herod?", a:["Peter","John","Paul","James"], correct:0, verse:"Acts 12:5 — Peter was kept in prison."},
{q:"Who baptized Jesus in the Jordan?", a:["John the Baptist","Peter","Paul","Andrew"], correct:0, verse:"Matthew 3:13 — Jesus came to John to be baptized."},
{q:"Who was the disciple known as 'Doubting Thomas'?", a:["Thomas","Peter","John","James"], correct:0, verse:"John 20:24 — Thomas doubted Jesus' resurrection."},
{q:"Who denied Jesus three times?", a:["Peter","John","Thomas","Andrew"], correct:0, verse:"Luke 22:61 — Peter denied Him."},
{q:"Who wrote most of the New Testament?", a:["Paul","John","Peter","James"], correct:0, verse:"Romans 1:1 — Paul wrote many letters."},
{q:"Who was thrown into prison for praying to God?", a:["Daniel","Shadrach","Meshach","Abednego"], correct:0, verse:"Daniel 6:10 — Daniel prayed and was cast into the lions' den."},
{q:"What did Moses cast into the bitter waters to make them sweet?", a:["A rod","A tree","A branch","Salt"], correct:1, verse:"Exodus 15:25 — And he cried unto the LORD; and the LORD shewed him a tree, which when he had cast into the waters, the waters were made sweet."},
{q:"Who was the father of John the Baptist?", a:["Zacharias","Joseph","Peter","Paul"], correct:0, verse:"Luke 1:13 — Thy wife Elisabeth shall bear thee a son, and thou shalt call his name John."},
{q:"Who was the wife of Moses?", a:["Zipporah","Sarah","Rebekah","Rachel"], correct:0, verse:"Exodus 2:21 — And Moses was content to dwell with the man: and he gave Moses Zipporah his daughter."},
{q:"What was the name of David’s father?", a:["Jesse","Saul","Samuel","Abner"], correct:0, verse:"1 Samuel 17:12 — David was the son of that Ephrathite of Bethlehemjudah, whose name was Jesse."},
{q:"Who was the commander of Saul’s army?", a:["Abner","Joab","David","Jonathan"], correct:0, verse:"1 Samuel 14:50 — The name of the captain of his host was Abner."},
{q:"Who was David’s best friend?", a:["Jonathan","Samuel","Nathan","Absalom"], correct:0, verse:"1 Samuel 18:1 — The soul of Jonathan was knit with the soul of David."},
{q:"Who rebelled against his father David?", a:["Absalom","Solomon","Adonijah","Amnon"], correct:0, verse:"2 Samuel 15:10 — Absalom sent spies throughout all the tribes."},
{q:"Who interpreted the handwriting on the wall?", a:["Daniel","Joseph","Elijah","Isaiah"], correct:0, verse:"Daniel 5:25 — This is the writing that was written, Mene, Mene, Tekel, Upharsin."},
{q:"What king saw the handwriting on the wall?", a:["Belshazzar","Nebuchadnezzar","Darius","Cyrus"], correct:0, verse:"Daniel 5:1 — Belshazzar the king made a great feast."},
{q:"Who was Esther’s cousin?", a:["Mordecai","Haman","Ezra","Nehemiah"], correct:0, verse:"Esther 2:7 — Mordecai brought up Hadassah, that is, Esther."},
{q:"Who plotted to destroy the Jews in Esther’s time?", a:["Haman","Herod","Pharaoh","Pilate"], correct:0, verse:"Esther 3:6 — Haman sought to destroy all the Jews."},

{q:"Who rebuilt the walls of Jerusalem?", a:["Nehemiah","Ezra","Zerubbabel","Joshua"], correct:0, verse:"Nehemiah 6:15 — So the wall was finished."},
{q:"Who was the scribe that helped restore the Law?", a:["Ezra","Nehemiah","Jeremiah","Isaiah"], correct:0, verse:"Ezra 7:6 — Ezra... a ready scribe in the law of Moses."},
{q:"Who was thrown into a pit by his brothers?", a:["Joseph","David","Daniel","Jonah"], correct:0, verse:"Genesis 37:24 — And they took him, and cast him into a pit."},
{q:"What was the name of Joseph’s younger brother?", a:["Benjamin","Reuben","Judah","Levi"], correct:0, verse:"Genesis 35:18 — She called his name Benoni: but his father called him Benjamin."},
{q:"Who was sold into Egypt for 20 pieces of silver?", a:["Joseph","David","Samson","Isaac"], correct:0, verse:"Genesis 37:28 — They sold Joseph to the Ishmeelites for twenty pieces of silver."},
{q:"Who blessed Jacob and Esau?", a:["Isaac","Abraham","Moses","Aaron"], correct:0, verse:"Genesis 27:27 — And he blessed him."},
{q:"Who tricked Isaac to get the blessing?", a:["Jacob","Esau","Joseph","David"], correct:0, verse:"Genesis 27:19 — I am Esau thy firstborn."},
{q:"Who saw a ladder reaching to heaven?", a:["Jacob","Moses","Elijah","Daniel"], correct:0, verse:"Genesis 28:12 — Behold a ladder set up on the earth."},
{q:"Who worked 14 years to marry Rachel?", a:["Jacob","Isaac","Joseph","David"], correct:0, verse:"Genesis 29:30 — And he served with him yet seven other years."},
{q:"Who was Leah’s sister?", a:["Rachel","Sarah","Rebekah","Miriam"], correct:0, verse:"Genesis 29:16 — The name of the younger was Rachel."},

{q:"Who became queen after Vashti?", a:["Esther","Ruth","Deborah","Hannah"], correct:0, verse:"Esther 2:17 — The king loved Esther... and set the royal crown upon her head."},
{q:"Who was Ruth’s mother-in-law?", a:["Naomi","Miriam","Sarah","Hannah"], correct:0, verse:"Ruth 1:16 — Thy people shall be my people."},
{q:"Who was the kinsman redeemer of Ruth?", a:["Boaz","Elimelech","Obed","Jesse"], correct:0, verse:"Ruth 4:13 — So Boaz took Ruth, and she was his wife."},
{q:"Who was Samuel raised by?", a:["Eli","Moses","David","Aaron"], correct:0, verse:"1 Samuel 3:1 — The child Samuel ministered unto the LORD before Eli."},
{q:"Who were Eli’s wicked sons?", a:["Hophni and Phinehas","Nadab and Abihu","James and John","Cain and Abel"], correct:0, verse:"1 Samuel 2:12 — Now the sons of Eli were sons of Belial."},
{q:"Who killed 1000 men with a jawbone?", a:["Samson","David","Joshua","Saul"], correct:0, verse:"Judges 15:15 — He slew a thousand men therewith."},
{q:"Who cut Samson’s hair?", a:["Delilah","Ruth","Esther","Miriam"], correct:0, verse:"Judges 16:19 — She caused him to shave off the seven locks."},
{q:"Who saw a chariot of fire?", a:["Elijah","Elisha","Moses","Daniel"], correct:0, verse:"2 Kings 2:11 — There appeared a chariot of fire."},
{q:"Who healed Naaman?", a:["Elisha","Elijah","Moses","Aaron"], correct:0, verse:"2 Kings 5:14 — His flesh came again like unto the flesh of a little child."},
{q:"What prophet challenged the prophets of Baal?", a:["Elijah","Isaiah","Jeremiah","Ezekiel"], correct:0, verse:"1 Kings 18:36 — Elijah the prophet came near."},

{q:"Who was the father of Solomon?", a:["David","Saul","Samuel","Jesse"], correct:0, verse:"2 Samuel 12:24 — And she bare a son, and he called his name Solomon."},
{q:"Who tried to kill baby Jesus?", a:["Herod","Pilate","Caesar","Pharaoh"], correct:0, verse:"Matthew 2:16 — Herod... slew all the children."},
{q:"Who carried Jesus’ cross?", a:["Simon of Cyrene","Peter","John","Andrew"], correct:0, verse:"Luke 23:26 — They laid the cross on him."},
{q:"Who asked for Jesus’ body after crucifixion?", a:["Joseph of Arimathaea","Nicodemus","Peter","John"], correct:0, verse:"Matthew 27:58 — He went to Pilate, and begged the body of Jesus."},
{q:"Who helped bury Jesus?", a:["Nicodemus","Peter","Paul","James"], correct:0, verse:"John 19:39 — Nicodemus... brought a mixture of myrrh and aloes."},
{q:"Who was the Roman governor who sentenced Jesus?", a:["Pilate","Herod","Caesar","Felix"], correct:0, verse:"Matthew 27:24 — When Pilate saw that he could prevail nothing."},
{q:"Who said, 'What is truth?'", a:["Pilate","Peter","Paul","John"], correct:0, verse:"John 18:38 — Pilate saith unto him, What is truth?"},
{q:"Who was released instead of Jesus?", a:["Barabbas","Judas","Herod","Caiaphas"], correct:0, verse:"Matthew 27:26 — Then released he Barabbas."},
{q:"Who was the high priest at Jesus’ trial?", a:["Caiaphas","Annas","Aaron","Zadok"], correct:0, verse:"Matthew 26:57 — Led him away to Caiaphas the high priest."},
{q:"Who was the first to see Jesus after resurrection?", a:["Mary Magdalene","Peter","John","Thomas"], correct:0, verse:"Mark 16:9 — He appeared first to Mary Magdalene."},

{q:"Who walked with Jesus to Emmaus?", a:["Two disciples","Peter and John","James and Andrew","Paul and Barnabas"], correct:0, verse:"Luke 24:13 — Two of them went that same day to a village called Emmaus."},
{q:"Who fell asleep and fell from a window?", a:["Eutychus","Timothy","Titus","Silas"], correct:0, verse:"Acts 20:9 — A certain young man named Eutychus."},
{q:"Who was Paul’s companion in prison?", a:["Silas","Barnabas","Timothy","Luke"], correct:0, verse:"Acts 16:25 — Paul and Silas prayed, and sang praises."},
{q:"Who was taught by Paul as a young preacher?", a:["Timothy","Peter","John","Mark"], correct:0, verse:"1 Timothy 1:2 — Unto Timothy, my own son in the faith."},
{q:"Who was the physician who traveled with Paul?", a:["Luke","Mark","John","Peter"], correct:0, verse:"Colossians 4:14 — Luke, the beloved physician."},
{q:"Who wrote the Gospel of Mark?", a:["Mark","Luke","John","Matthew"], correct:0, verse:"Acts 12:12 — John, whose surname was Mark."},
{q:"Who wrote the Gospel of Luke?", a:["Luke","Mark","John","Matthew"], correct:0, verse:"Luke 1:3 — It seemed good to me also... to write unto thee."},
{q:"Who wrote the Gospel of John?", a:["John","Peter","Paul","James"], correct:0, verse:"John 21:24 — This is the disciple which testifieth of these things."},
{q:"Who was the brother of Jesus?", a:["James","John","Peter","Andrew"], correct:0, verse:"Galatians 1:19 — James the Lord's brother."},
{q:"Who saw the new heaven and new earth?", a:["John","Peter","Paul","James"], correct:0, verse:"Revelation 21:1 — And I saw a new heaven and a new earth."},
{q:"Who was Adam’s third son?", a:["Cain","Abel","Seth","Enoch"], correct:2, verse:"Genesis 4:25 — And Adam knew his wife again; and she bare a son, and called his name Seth."},
{q:"Who walked with God and was not, for God took him?", a:["Noah","Enoch","Elijah","Moses"], correct:1, verse:"Genesis 5:24 — And Enoch walked with God: and he was not; for God took him."},
{q:"Who planted a vineyard after the flood?", a:["Noah","Abraham","Isaac","Jacob"], correct:0, verse:"Genesis 9:20 — And Noah began to be an husbandman, and he planted a vineyard."},
{q:"What did God confuse at the Tower of Babel?", a:["Voices","Languages","Nations","Kings"], correct:1, verse:"Genesis 11:7 — Go to, let us go down, and there confound their language."},
{q:"Who was Lot’s uncle?", a:["Moses","Abraham","Isaac","Jacob"], correct:1, verse:"Genesis 12:5 — Abram took Sarai his wife, and Lot his brother's son."},
{q:"What city was destroyed with fire and brimstone?", a:["Nineveh","Jericho","Sodom","Babylon"], correct:2, verse:"Genesis 19:24 — Then the LORD rained upon Sodom and upon Gomorrah brimstone and fire."},
{q:"Who looked back and became a pillar of salt?", a:["Sarah","Rebekah","Lot's wife","Rachel"], correct:2, verse:"Genesis 19:26 — But his wife looked back from behind him, and she became a pillar of salt."},
{q:"Who laughed at God’s promise of a son?", a:["Sarah","Hannah","Rebekah","Leah"], correct:0, verse:"Genesis 18:12 — Therefore Sarah laughed within herself."},
{q:"Who offered Isaac on the altar?", a:["Jacob","Moses","Abraham","Aaron"], correct:2, verse:"Genesis 22:9 — Abraham built an altar... and bound Isaac his son."},
{q:"Who dug wells and argued with herdsmen?", a:["Isaac","Jacob","Joseph","David"], correct:0, verse:"Genesis 26:19 — Isaac's servants digged in the valley, and found a well."},

{q:"Who dreamed of stars bowing to him?", a:["Joseph","Daniel","Jacob","David"], correct:0, verse:"Genesis 37:9 — The sun and the moon and the eleven stars made obeisance to me."},
{q:"Who was thrown into the dungeon in Egypt?", a:["Joseph","Moses","Aaron","Joshua"], correct:0, verse:"Genesis 39:20 — Joseph's master took him, and put him into the prison."},
{q:"Who hardened his heart against Moses?", a:["Pharaoh","Herod","Saul","Nebuchadnezzar"], correct:0, verse:"Exodus 8:15 — He hardened his heart, and hearkened not unto them."},
{q:"What did Moses strike to bring water?", a:["Tree","Rock","Sand","River"], correct:1, verse:"Exodus 17:6 — Thou shalt smite the rock, and there shall come water out of it."},
{q:"What fell from heaven as food?", a:["Bread","Manna","Fruit","Honey"], correct:1, verse:"Exodus 16:15 — Moses said unto them, This is the bread which the LORD hath given you to eat."},
{q:"Who made a golden calf?", a:["Moses","Joshua","Aaron","Caleb"], correct:2, verse:"Exodus 32:4 — He made it a molten calf."},
{q:"Who spied out the Promised Land?", a:["12 men","10 men","7 men","5 men"], correct:0, verse:"Numbers 13:2 — Send thou men, that they may search the land of Canaan."},
{q:"Who and Caleb gave a good report?", a:["Joshua","Aaron","Moses","David"], correct:0, verse:"Numbers 14:6 — Joshua... and Caleb... rent their clothes."},
{q:"What city’s walls fell after marching?", a:["Jericho","Ai","Babylon","Nineveh"], correct:0, verse:"Joshua 6:20 — The wall fell down flat."},
{q:"Who stopped the sun and moon?", a:["Moses","Joshua","Elijah","Samuel"], correct:1, verse:"Joshua 10:13 — The sun stood still, and the moon stayed."},

{q:"Who was a judge and a prophetess?", a:["Ruth","Deborah","Esther","Hannah"], correct:1, verse:"Judges 4:4 — Deborah, a prophetess... judged Israel."},
{q:"Who blew a trumpet and defeated Midian?", a:["Gideon","Samson","David","Saul"], correct:0, verse:"Judges 7:20 — They blew the trumpets... and the host ran."},
{q:"Who had long hair as strength?", a:["David","Samson","Saul","Absalom"], correct:1, verse:"Judges 16:17 — If I be shaven, then my strength will go from me."},
{q:"Who threw a spear at David?", a:["Saul","Solomon","Absalom","Joab"], correct:0, verse:"1 Samuel 18:11 — Saul cast the javelin."},
{q:"Who saw dry bones live again?", a:["Isaiah","Jeremiah","Ezekiel","Daniel"], correct:2, verse:"Ezekiel 37:5 — Behold, I will cause breath to enter into you, and ye shall live."},
{q:"Who was thrown into a miry pit?", a:["Isaiah","Jeremiah","Daniel","Ezekiel"], correct:1, verse:"Jeremiah 38:6 — They let down Jeremiah... into the dungeon."},
{q:"Who fasted in the lions’ den?", a:["Daniel","Joseph","David","Elijah"], correct:0, verse:"Daniel 6:18 — The king... passed the night fasting."},

{q:"Who prepared the way of the Lord?", a:["John the Baptist","Peter","Paul","James"], correct:0, verse:"Matthew 3:3 — Prepare ye the way of the Lord."},
{q:"Who said, 'Behold the Lamb of God'?", a:["Peter","John the Baptist","Paul","Andrew"], correct:1, verse:"John 1:29 — Behold the Lamb of God."},
{q:"Who tempted Jesus in the wilderness?", a:["Satan","Pharisees","Herod","Pilate"], correct:0, verse:"Matthew 4:1 — Jesus... to be tempted of the devil."},
{q:"How many days did Jesus fast?", a:["30","40","50","60"], correct:1, verse:"Matthew 4:2 — When he had fasted forty days."},
{q:"Who said, 'Lord, save me'?", a:["Peter","John","James","Andrew"], correct:0, verse:"Matthew 14:30 — Lord, save me."},
{q:"Who cut off the servant’s ear?", a:["Peter","John","James","Andrew"], correct:0, verse:"John 18:10 — Simon Peter... cut off his right ear."},
{q:"What was the servant’s name?", a:["Malchus","Marcus","Lucius","Justus"], correct:0, verse:"John 18:10 — The servant's name was Malchus."},
{q:"Who was released instead of Jesus?", a:["Barabbas","Judas","Herod","Caiaphas"], correct:0, verse:"Matthew 27:26 — Then released he Barabbas."},
{q:"Who was first to see Jesus alive?", a:["Mary Magdalene","Peter","John","Thomas"], correct:0, verse:"John 20:14 — She saw Jesus standing."},

{q:"Who preached at Pentecost?", a:["Peter","Paul","John","James"], correct:0, verse:"Acts 2:14 — Peter... lifted up his voice."},
{q:"What descended at Pentecost?", a:["Fire","Wind","Doves","Rain"], correct:0, verse:"Acts 2:3 — Cloven tongues like as of fire."},
{q:"Who was struck blind on the road to Damascus?", a:["Paul","Peter","John","James"], correct:0, verse:"Acts 9:8 — Saul arose... and when his eyes were opened, he saw no man."},
{q:"Who healed the lame man at the gate?", a:["Peter and John","Paul and Silas","Barnabas","Stephen"], correct:0, verse:"Acts 3:6 — Rise up and walk."},
{q:"Who was stoned seeing heaven opened?", a:["Stephen","Peter","Paul","James"], correct:0, verse:"Acts 7:56 — I see the heavens opened."},
{q:"Who was eaten by worms?", a:["Herod","Pilate","Caesar","Pharaoh"], correct:0, verse:"Acts 12:23 — He was eaten of worms."},
{q:"Who wrote 'I can do all things through Christ'?", a:["Paul","Peter","John","James"], correct:0, verse:"Philippians 4:13 — I can do all things through Christ."}

];

// ========================
// QUIZ DATA
// ========================
// (Keep your existing quiz array as-is)
// ========================

// ========================
// GLOBALS
// ========================
let lives = {}, stats = {};
let timerValue = "off", timerInterval;
let players = [], scores = {}, currentPlayerIndex = 0;
let usedQuestions = [], mode = "solo", totalQuestions = 0;
let remainingTime = 0; // time left on current question

// ========================
// ELEMENTS
// ========================
const modeBox = document.getElementById("modeBox");
const nameBox = document.getElementById("nameBox");
const quizBox = document.getElementById("quizBox");
const question = document.getElementById("question");
const answers = document.getElementById("answers");
const scoreText = document.getElementById("score");
const progressBar = document.getElementById("progressBar");
const verseText = document.getElementById("verse");
const playerTurnText = document.getElementById("playerTurn");
const scorePlayer1Text = document.getElementById("scorePlayer1");
const scorePlayer2Text = document.getElementById("scorePlayer2");

const correctSound = document.getElementById("correctSound");
const wrongSound = document.getElementById("wrongSound");
const countdownSound = document.getElementById("countdownSound");
const timeUpSound = document.getElementById("timeUpSound");
const gameOverSound = document.getElementById("gameOverSound");
const highScoreSound = document.getElementById("highScoreSound");
const finishSound = document.getElementById("finishSound");

const gameOverScreen = document.getElementById("gameOverScreen");
const gameOverMessage = document.getElementById("gameOverMessage");
const gameOverRestartButton = document.getElementById("gameOverRestartButton");
const gameOverBackButton = document.getElementById("gameOverBackButton");

// PAUSE ELEMENTS
const pauseBtn = document.getElementById("pauseBtn");
const pauseMenu = document.getElementById("pauseMenu");
const pauseResumeBtn = document.getElementById("pauseResumeBtn");
const pauseRestartBtn = document.getElementById("pauseRestartBtn");


// ========================
// HELPERS
// ========================
function stopAllSounds() {
  countdownSound.pause(); countdownSound.currentTime=0;
  timeUpSound.pause(); timeUpSound.currentTime=0;
  gameOverSound.pause(); gameOverSound.currentTime=0;
}

function clearTimer() { clearInterval(timerInterval); }

function shuffle(array){ 
  for(let i=array.length-1;i>0;i--){ 
    let j=Math.floor(Math.random()*(i+1)); 
    [array[i],array[j]]=[array[j],array[i]];
  } 
}

// ========================
// GAME FLOW
// ========================
function startGame() {
  document.getElementById("startScreen").style.display = "none";
  modeBox.style.display = "block";
}

function chooseMode(selected){
  mode = selected; 
  modeBox.style.display="none"; 
  nameBox.style.display="block";
  document.getElementById("player2Name").style.display = mode==="solo"?"none":"inline-block";
}

function startQuiz(){
  
  // 🧹 CLEAR PREVIOUS RESULTS
  scoreText.innerHTML = "";

  timerValue = settings.timer !== "off" 
  ? settings.timer 
  : document.getElementById("timerSelect").value;
  const p1 = document.getElementById("player1Name").value||"Player 1";
  const p2 = document.getElementById("player2Name").value||"Player 2";

  players = mode==="multi"?[p1,p2]:[p1];
  scores = {}; lives={}; stats={};
  players.forEach(p=>{ scores[p]=0; lives[p]=3; stats[p]={correct:0,total:0}; });
  usedQuestions=[]; currentPlayerIndex=0;

  totalQuestions = parseInt(document.getElementById("numQuestionsSelect").value);
  if(totalQuestions>quiz.length) totalQuestions=quiz.length;

  nameBox.style.display="none"; 
  quizBox.style.display="block";
  updateScoreboard(); 
  updateLivesBoard(); 
  loadQuestion();
}

// ========================
// SETTINGS SYSTEM
// ========================
let settings = {
  sound: "on",
  timer: "off"
};

// Load settings on start
loadSettings();

function openSettings(){
  document.getElementById("settingsMenu").style.display = "flex";
  loadSettingsToUI();
}

function closeSettings(){
  document.getElementById("settingsMenu").style.display = "none";
}

function saveSettings(){
  settings.sound = document.getElementById("soundToggle").value;
  settings.timer = document.getElementById("defaultTimer").value;

  localStorage.setItem("quizSettings", JSON.stringify(settings));

  alert("Settings saved!");
  closeSettings();
}

function loadSettings(){
  let saved = JSON.parse(localStorage.getItem("quizSettings"));
  if(saved){
    settings = saved;
  }
}

function loadSettingsToUI(){
  document.getElementById("soundToggle").value = settings.sound;
  document.getElementById("defaultTimer").value = settings.timer;
}

function playSound(sound){
  if(settings.sound === "off") return;
  sound.currentTime = 0;
  sound.play();
}
// ========================
// LOAD QUESTION
// ========================
function loadQuestion(){
  remainingTime = 0; 
  clearTimer(); stopAllSounds();
  answers.innerHTML="";
  verseText.innerText="";
  document.getElementById("timer").innerText="";

  if(usedQuestions.length>=totalQuestions){ 
    showWinner(); 
    return; 
  }

  let qIndex;
  do { qIndex=Math.floor(Math.random()*quiz.length); } 
  while(usedQuestions.includes(qIndex));

  usedQuestions.push(qIndex);
  const q=quiz[qIndex];

  question.innerText = q.q;
  playerTurnText.innerText = mode==="multi"
    ? `${players[currentPlayerIndex]}'s turn`
    : "";

  progressBar.style.width=((usedQuestions.length/totalQuestions)*100)+"%";

  let options = q.a.map((text,i)=>({ text, correct:i===q.correct }));
  shuffle(options);

  options.forEach(option=>{
    let btn=document.createElement("button");
    btn.innerText=option.text;

    btn.onclick=function(){
      clearTimer(); stopAllSounds();
      let currentPlayer=players[currentPlayerIndex];
      stats[currentPlayer].total++;

      // LOCK ALL BUTTONS
      Array.from(answers.children).forEach(b=>b.disabled=true);
      btn.classList.add("selected");

      if(option.correct){
        scores[currentPlayer]++;
        stats[currentPlayer].correct++;
        btn.classList.add("correct");
        playSound(correctSound);
      } else {
        lives[currentPlayer]--;
        btn.classList.add("wrong");
        playSound(wrongSound);

        Array.from(answers.children).forEach(b=>{
          if(b.innerText === q.a[q.correct]){
            b.classList.add("correct");
          }
        });

        if(mode==="solo" && lives[currentPlayer]<=0){ showGameOver(currentPlayer); return; }
        if(mode==="multi" && lives[currentPlayer]<=0){ eliminatePlayer(currentPlayer); if(players.length===0){ showWinner(); return; } }
      }

      verseText.innerText=q.verse;
      updateScoreboard();
      updateLivesBoard();

      setTimeout(()=>{ 
        if(players.length===0) return; 
        if(mode==="multi") currentPlayerIndex=(currentPlayerIndex+1)%players.length; 
        loadQuestion(); 
      },1500);
    };

    answers.appendChild(btn);
  });

  // ========================
  // TIMER
  // ========================
  if(timerValue!=="off"){
    var time = remainingTime>0 ? remainingTime : parseInt(timerValue);
    const timerDisplay = document.getElementById("timer");
    timerDisplay.innerText="Time: "+time;

    timerInterval=setInterval(()=>{
      time--;
      remainingTime = time;
      timerDisplay.innerText="Time: "+time;
      if(time<=3 && time>0){ countdownSound.currentTime=0; playSound(countdownSound);  }

      if(time<=0){
        clearTimer(); stopAllSounds(); playSound(timeUpSound);;
        let currentPlayer = players[currentPlayerIndex];
        lives[currentPlayer]--; updateLivesBoard();

        Array.from(answers.children).forEach(b=>b.disabled=true);
        Array.from(answers.children).forEach(b=>{
          if(b.innerText === quiz[usedQuestions[usedQuestions.length-1]].a[quiz[usedQuestions[usedQuestions.length-1]].correct]){
            b.classList.add("correct");
          }
        });

        if(mode==="solo" && lives[currentPlayer]<=0){ showGameOver(currentPlayer); return; }
        if(mode==="multi" && lives[currentPlayer]<=0){ eliminatePlayer(currentPlayer); if(players.length===0){ showWinner(); return; } }

        setTimeout(()=>{
          if(players.length===0) return;
          if(mode==="multi") currentPlayerIndex=(currentPlayerIndex+1)%players.length;
          loadQuestion();
        },1500);
      }
    },1000);
  }
}

// ========================
// SCOREBOARD
// ========================
function updateScoreboard(){
  if(mode==="multi"){ 
    scorePlayer1Text.innerText=`${players[0]}: ${scores[players[0]]}`; 
    scorePlayer2Text.innerText = players[1] ? `${players[1]}: ${scores[players[1]]}` : ""; 
  } else { 
    scorePlayer1Text.innerText=`${players[0]}: ${scores[players[0]]}`; 
    scorePlayer2Text.innerText=""; 
  }
}
function updateLivesBoard(){
  document.getElementById("livesBoard").innerHTML=players.map(p=>`${p} ❤️: ${lives[p]}`).join(" | ");
}

// ========================
// GAME END
// ========================
function showWinner(){
  if(mode === "solo"){
  saveHighScore();
}

  clearTimer(); 
  stopAllSounds();

  // 🔇 HIDE PAUSE BUTTON
  pauseBtn.style.display = "none";

  // 🔊 PLAY FINISH SOUND
  if(finishSound){
    finishSound.currentTime = 0;
   playSound(finishSound);
  }

  // 🧹 CLEAR QUIZ UI
  question.innerText = "🏆 Quiz Finished!";
  answers.innerHTML = "";
  verseText.innerText = "";
  progressBar.style.width = "100%";

  // ========================
  // 🏆 DETERMINE WINNER
  // ========================
  let winnerText = "";

  if(mode === "multi"){
    let allPlayers = Object.keys(scores);

    let highestScore = Math.max(...allPlayers.map(p => scores[p]));
    let winners = allPlayers.filter(p => scores[p] === highestScore);

    if(winners.length > 1){
      winnerText = `🤝 It's a TIE between: ${winners.join(", ")}`;
    } else {
      winnerText = `🏆 WINNER: ${winners[0]} 🎉`;
    }
  } else {
    // Solo mode
    let p = Object.keys(scores)[0];
    winnerText = `🏆 Your Score: ${scores[p]}`;
  }

  // ========================
  // 📊 RESULTS
  // ========================
  let resultHTML = `<h2>${winnerText}</h2>`;

  Object.keys(scores).forEach(p=>{
    let correct = stats[p].correct; 
    let total = stats[p].total; 
    let accuracy = total ? Math.round((correct/total)*100) : 0;

    let isWinner = winnerText.includes(p);

    resultHTML += `
      <p style="${isWinner ? 'color:gold; font-size:20px;' : ''}">
        <strong>${p}</strong><br>
        Score: ${scores[p]}<br>
        Correct: ${correct}/${total}<br>
        Accuracy: ${accuracy}%
      </p><hr>`;
  });

  // 🎮 BUTTONS
  resultHTML += `
    <br>
    <button id="playAgainBtn">🔄 Play Again</button>
    <button id="quitBtn">🏠 Quit</button>
  `;

  scoreText.innerHTML = resultHTML;

  // 🎉 CONFETTI
  let duration = 3000; 
  let end = Date.now() + duration;

  (function frame(){ 
    confetti({ particleCount:3, angle:60, spread:55, origin:{x:0} }); 
    confetti({ particleCount:3, angle:120, spread:55, origin:{x:1} }); 
    if(Date.now() < end){ requestAnimationFrame(frame); } 
  })();

  // 🎯 BUTTON FUNCTIONS
  document.getElementById("playAgainBtn").onclick = function(){
    pauseBtn.style.display = "block";
    startQuiz();
  };

  document.getElementById("quitBtn").onclick = function(){
    pauseBtn.style.display = "block";
    goToStartScreen();
  };
}
function showGameOver(player){
  clearTimer(); stopAllSounds(); playSound(gameOverSound);
  gameOverMessage.innerText = player + " ran out of lives!";
  gameOverScreen.style.display="flex";
}

function eliminatePlayer(player){
  players=players.filter(p=>p!==player);
  if(players.length===0){ showWinner(); return; }
  question.innerText=player+" is out of lives!";
}

// ========================
// BACK BUTTONS
// ========================
document.querySelectorAll(".backButton").forEach(btn=>{
  btn.onclick=function(){
    if(quizBox.style.display==="block"){ quizBox.style.display="none"; nameBox.style.display="block"; clearTimer(); stopAllSounds(); }
    else if(nameBox.style.display==="block"){ nameBox.style.display="none"; modeBox.style.display="block"; }
    else if(modeBox.style.display==="block"){ modeBox.style.display="none"; document.getElementById("startScreen").style.display="block"; }
  };
});

// ========================
// START SCREEN
// ========================
function goToStartScreen(){
  quizBox.style.display="none";
  modeBox.style.display="none";
  nameBox.style.display="none";
  gameOverScreen.style.display="none";
  pauseMenu.style.display="none";
  clearTimer();
  stopAllSounds();
  document.getElementById("timer").innerText="";
  progressBar.style.width="0%";
  loadHighScores();
}

// ========================
// HIGH SCORES
// ========================
function saveHighScore(){
  // Load existing high scores
  let existing = JSON.parse(localStorage.getItem("bibleQuizHighScore")) || {};

  // Find previous global top score
  let globalTopScore = 0;
  for (let key in existing) {
    if (existing[key] > globalTopScore) globalTopScore = existing[key];
  }

  let personalHighPlayers = [];
  let globalHighPlayers = [];

  players.forEach(p => {
    // Check personal high
    if (!existing[p] || scores[p] > existing[p]) {
      personalHighPlayers.push(p);
    }

    // Check global top
    if (scores[p] > globalTopScore) {
      globalHighPlayers.push(p);
    }

    // Always update the saved score
    existing[p] = scores[p];
  });

  localStorage.setItem("bibleQuizHighScore", JSON.stringify(existing));

  // Show banners and play sounds
  if (personalHighPlayers.length > 0) {
    showNewHighScore(personalHighPlayers, "personal");
  }

  if (globalHighPlayers.length > 0) {
    showNewHighScore(globalHighPlayers, "global");
  }

  // Refresh leaderboard
  loadHighScores();
}
function showNewHighScore(playersWithHigh, type="personal"){
  const banner = document.createElement("div");
  banner.className = "highScoreBanner";

  if(type === "personal"){
    banner.innerText = `🎉 NEW PERSONAL RECORD! 🎉\n${playersWithHigh.join(", ")}`;
  } else if(type === "global"){
    banner.innerText = `🏆 NEW HIGH SCORE! 🏆\n${playersWithHigh.join(", ")}`;
  }

  document.body.appendChild(banner);

  // Play sound
  if(highScoreSound){
    highScoreSound.currentTime = 0;
    playSound(highScoreSound);
  }

  // Auto remove after 3s
  setTimeout(() => {
    banner.classList.add("fadeOut");
    setTimeout(() => banner.remove(), 500);
  }, 3000);
}
function loadHighScores(){
  let data = JSON.parse(localStorage.getItem("bibleQuizHighScore")) || {};
  const div = document.getElementById("highScores");
  let entries = Object.entries(data);

  if(entries.length === 0){ div.innerHTML = "<h3>Top Players</h3><p>No scores yet</p>"; return; }

  let sorted = entries.sort((a,b)=>b[1]-a[1]).slice(0,3);
  let medals = ["🥇","🥈","🥉"];

  div.innerHTML = "<h3>Top Players</h3>" +
    sorted.map(([name,score],i)=>`${medals[i]} ${name}: ${score}`).join("<br>");
}

function toggleLeaderboard(){
  const box = document.getElementById("leaderboardBox");
  if(box.style.display === "flex"){ box.style.display = "none"; }
  else { loadHighScores(); box.style.display = "flex"; }
}
function resetLeaderboard(){
  if(confirm("Reset the entire leaderboard? This cannot be undone!")){
    
    // ❌ DELETE ALL SAVED SCORES
    localStorage.removeItem("bibleQuizHighScore");

    // ✅ Refresh leaderboard UI
    loadHighScores();

    // Optional message
    const div = document.getElementById("highScores");
    div.innerHTML = "<h3>Top Players</h3><p>No scores yet</p>";
  }
}
// ========================
// PAUSE SYSTEM
// ========================
pauseBtn.onclick = function(){
  clearTimer();
  stopAllSounds();
  pauseMenu.style.display="flex";
};

function resumeGame(){
  pauseMenu.style.display="none";

  if(timerValue!=="off"){
    let time = remainingTime>0 ? remainingTime : parseInt(timerValue);
    const timerDisplay = document.getElementById("timer");

    timerInterval=setInterval(()=>{
      time--;
      remainingTime=time;
      timerDisplay.innerText="Time: "+time;

      if(time<=0){
        clearTimer();
        loadQuestion();
      }
    },1000);
  }
}

pauseResumeBtn.onclick = resumeGame;

pauseRestartBtn.onclick = function(){
  pauseMenu.style.display="none";
  startQuiz();
};

// ========================
// QUIT FIXED
// ========================
function goToStartScreen(){
  quizBox.style.display="none";
  modeBox.style.display="none";
  nameBox.style.display="none";
  gameOverScreen.style.display="none";
  pauseMenu.style.display="none";
  document.getElementById("startScreen").style.display="block";

  clearTimer();
  stopAllSounds();

  players=[];
  scores={};
  lives={};
  stats={};
  usedQuestions=[];
  currentPlayerIndex=0;
  remainingTime=0;

  document.getElementById("timer").innerText="";
  progressBar.style.width="0%";
  question.innerText="";
  answers.innerHTML="";
  verseText.innerText="";
  scoreText.innerHTML="";
  playerTurnText.innerText="";
}

// ========================
// GAME OVER
// ========================
function showGameOver(player){
  clearTimer();
  stopAllSounds();
  gameOverSound.play();

  gameOverMessage.innerText = player + " ran out of lives!";
  gameOverScreen.style.display="flex";
}

gameOverRestartButton.onclick = function(){
  gameOverScreen.style.display="none";
  startQuiz();
};

gameOverBackButton.onclick = function(){
  gameOverScreen.style.display="none";
  goToStartScreen();
};