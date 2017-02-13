$(function() {

    function createIcon(color) {
      return {
        path: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z',
        fillColor: color,
        fillOpacity: 0.95,
        scale: 2,
        strokeColor: '#fff',
        strokeWeight: 3,
        anchor: new google.maps.Point(12, 24)
      };
    }

    // Bios
    var touch_bio = { "Varsity Vandals": { "bio": "<p>We are a Touch Rugby team based in Cardiff, South Wales. We have over 40 players spread across 7 teams (Mens, Womens and Mixed).</p>" +
                                                "<p>We believe Touch Rugby is for everyone, no matter what level you think you may be at.</p>" +
                                                "<p>We regularly encourage new players to come to our training sessions on a Sunday Morning <a href='http://www.varsityvandals.com/contact' target='_blank'>Click Here</a> to get in touch and find out more.</p>" +
                                                "<p>Website: <a href='http://www.varsityvandals.com/' target='_blank'>Visit</a> </p> " +
                                                "<p>Facebook: <a href='https://www.facebook.com/VarsityVandals/' target='_blank'>Visit</a></p>" 
                                        },
                      "Gower Dragons": { "bio": "<p>We are a Club of players based at South Gower RFC, but have players from all West Swansea and Gower Clubs playing with us-for social or competitive Touch.</p>" +
                                                "<p>Website: <a href='http://www.pitchero.com/clubs/gowerdragons' target='_blank'>Visit</a></p>" +
                                                "<p>Facebook: <a href='https://www.facebook.com/GowerDragons' target='_blank'>Visit</a></p>" +
                                                "<p>Twitter: <a href='https://twitter.com/gowerdragons' target='_blank'>Visit</a></p>"

                                       },
                      "Raptors": { "bio": "<p>The Raptors have two Mixed teams, a Women's, Men's & Junior team.</p>" +
                                                  "<p>New players are always welcome, regardless of ability/experience.</p>" +
                                                  "<p>We are currently the most successful team in Wales!</p>" +
                                                  "<p>2016 Season</p>" +
                                                  "<ul><li>Wales Touch Series winners</li><li>Touch Rugby Wales Mixed winners</li><li>Touch Rugby Wales Men's winners</li><li>Manchester Fully Charged Events winners</li><li>Nelson Charity Tournament winners</li></ul>" +
                                                  "<p>2017 season so far</p>" +
                                                  "<ul><li>Maidenhead Touch Autumn Elite Series winners</li></ul>" +
                                                  "<p>Website: <a href='http://www.pitchero.com/clubs/cardiffraptorstouch' target='_blank'>Visit</a></p>" +
                                                  "<p>Facebook: <a href='https://www.facebook.com/CardiffRaptorsTouch/' target='_blank'>Visit</a></p>" +
                                                  "<p>Email: cardiffraptors@hotmail.co.uk</p>"
                                         },
                      "Coyotes": { "bio": "<p>Coyote Cardiff Touch are a touch rugby team from Cardiff, Wales.</p>" +
                                          "<p>Previously known as Durka Touch aka The Durka Durkas, we were formed in 2005 and brought together both experienced players and those new to the game with an ethos of attractive running rugby and having a massive party afterwards.</p>" +
                                          "<p>Domestically, we operate men’s sides, mixed sides and women’s sides in the Cardiff Leagues. Over the last few years we have also competed in the Wales Touch Association‘s Wales Touch Series (WTS) and also in the England Touch Association’s National Touch Series (NTS) and finished within the top 8 sides in the country on many occasions.</p>" +
                                          "<p>We are proud that many of our players have represented Wales in Men’s Open, Women’s Open, Mixed Open and Mens Over 30s categories.</p>" +
                                          "<p>Website: <a href='http://cardifftouch.com/' target='_blank'>Visit</a></p>" +
                                          "<p>Facebook: <a href='https://www.facebook.com/cardifftouch/' target='_blank'>Visit</a></p>"
                                },
                      "Rebellion": { "bio": "<p>Rebellion are Touch Rugby Wales Mens Division 1 Champions 6 yrs running! WRU & WTA Touch Champions 2015.</p>" +
                                            "<p>Facebook: <a href='https://www.facebook.com/REBELLION-122602272272/' target='_blank'>Visit</a></p>" +
                                            "<p>Twitter: <a href='https://twitter.com/rebelliontouch' target='_blank'>Visit</a></p>"
                                },
                      "OSW": { "bio": "<p>OSW based in Bristol, if you are interested in playing please contact Joe on the email below</p>" +
                                      "<p>Twitter: <a href='https://twitter.com/osw_touch' target='_blank'>Visit</a></p>" +
                                      "<p>Email: Joe.Williams@cardiffblues.com</p>"
                                },
                      "Phoenix": { "bio": "<p>We are a Mixed, Men’s, Women’s and Junior’s Touch (rugby) club which was formed in 2010.</p>" +
                                          "<p>We are affiliated to the Wales Touch Association and are the current Wales Touch Series (WTS) reigning champions, winning the series for the first time in 2015!.</p>" +
                                          "<p>We are based at Old Penarthians RFC, in Penarth and train every Friday:</p>" +
                                          "<ul><li>Juniors (7- 15 years old) - 5.30pm-6.30pm</li><li>Seniors (16 years +) 6.30pm-8.30pm</li></ul>" +
                                          "<p>All new players are welcome and no experience needed!</p>" +
                                          "<p>Website: <a href='http://www.pitchero.com/clubs/phoenixtouch' target='_blank'>Visit</a></p>" +
                                          "<p>Facebook: <a href='https://www.facebook.com/PhoenixTouch/' target='_blank'>Visit</a></p>" +
                                          "<p>Twitter: <a href='https://twitter.com/phoenix_touch/' target='_blank'>Visit</a></p>"
                                },
                      "Kiwi": { "bio": "<p>Est. 1989 - Wales Most Successful Touch Team.</p>" +
                                       "<p>Rebuilding for 2017 - New players welcome. Our ethos, our success, indeed our culture is unique</p>" +
                                       "<p>Twitter: <a href='https://twitter.com/kiwidragons1989' target='_blank'>Visit</a></p>" 
                              },
                      "Llangain": { "bio": "<p>Llangain Touch, which started as community-based a training team, offers high-intensity touch training sessions at the Carmarthen Athletic 3G training barn all year round (Currently training on Sunday nights).</p>" +
                                           "<p>Competing in the Llanelli and Carmarthen based WRU leagues as well as the occasional one-day tournament.</p>" +
                                           "<p>Website: <a href='http://www.carmarthenquinsrfc.co.uk/News/Article/42739' target='_blank'>Visit</a></p>"

                                  },
                      "Cobras": { "bio": "<p>Carmarthen Cobras are a competitive Touch team that compete in the WTA Llandysul league and WTS tournaments.</p>" +
                                         "<p>Training throughout the summer season regularly at Carmarthen Quins RFC training grounds, Abergwili.</p>" +
                                         "<p>Facebook: <a href='https://www.facebook.com/groups/1573924976226061/' target='_blank'>Visit</a></p>"
                                },
                      "Plasmawr": { "bio": "<p>Touch Rugby team made up of former Ysgol Plasmawr pupils. Based in Cardiff, Wales.</p>" +
                                           "<p>Twitter: <a href='https://twitter.com/plasmawrstags' target='_blank'>Visit</a></p>"
                                  },
                      "Guerillas": { "bio": "<p>One of Scotland's largest & most successful touch clubs offering opportunities to play for players at all levels from complete beginner to internationals.</p>" +
                                            "<p>Facebook: <a href='https://www.facebook.com/GuerillasTRC/' target='_blank'>Visit</a></p>" +
                                            "<p>Twitter: <a href='https://twitter.com/guerilla_iain' target='_blank'>Visit</a></p>" +
                                            "<p>Email: guerillastouchrugby@gmail.com</p>"
                                   },
                      "Stirling Storm": { "bio": "<p>We have been playing Touch in Stirling since the summer of 2001 and are always on the lookout for new players, both male and female, of all ages.</p>" +
                                                 "<p>It doesn’t matter whether you’ve played Touch before or what level of fitness you have, everybody is welcome. We offer structured training from our qualified coaches and referees. You’ll be made to feel at home and you’ll find that Touch is a really easy sport to learn.</p>" +
                                                 "<p>Our club works hard to ensure everyone is catered for, from those looking for a social run out through to those wanting to compete at top level in club tournaments and on to Regional and National representation.</p>" +
                                                 "<p>Facebook: <a href='https://www.facebook.com/stirlingstorm/' target='_blank'>Visit</a></p>" +
                                                 "<p>Twitter: <a href='https://twitter.com/stirlingtouch' target='_blank'>Visit</a></p>"
                                        },
                      "Galaxy Scotland": { "bio": "<p>Galaxy Scotland aims to promote free flowing, high pace touch based on the New Zealand style of from from where the club was born.</p>" +
                                                  "<p>The club plays in various leagues in Edinburgh, ranging from beginners to elite. It's primary focus is the Monday night Touch Superleague where is has a proud history of titles.</p>" +
                                                  "<p>It's a friendly and welcoming club, playing an exciting brand of Touch!</p>" +
                                                  "<p>Facebook: <a href='https://www.facebook.com/galaxyscotland/' target='_blank'>Visit</a></p>" +
                                                  "<p>Twitter: <a href='https://twitter.com/GalaxyEdinburgh' target='_blank'>Visit</a></p>" +
                                                  "<p>Website: <a href='http://www.galaxytouch.co.uk/' target='_blank'>Visit</a></p>"
                                              },
                      "Buffalos": { "bio": "<p>The Buffalos are a friendly club who enjoy a good game of touch as much as the social aspect of the sport.</p>" +
                                           "<p>We play in elite, intermediate and social leagues and tournaments, catering for our players who range from internationals to beginners. If you fancy a run join the herd!</p>" +
                                           "<p>Facebook: <a href='https://www.facebook.com/buffalostouchrugby/' target='_blank'>Visit</a></p>" +
                                           "<p>Twitter: <a href='https://twitter.com/BuffalosTouch' target='_blank'>Visit</a></p>" +
                                           "<p>Instagram: <a href='https://www.instagram.com/BuffalosTouch/'>Visit</a></p>"
                                  },
                      "Six Pack": { "bio": "<p>Six Pack are an Edinburgh based Touch Rugby Club playing socially and competitively at local, regional and national levels.</p>" +
                                           "<p>Players of all abilities are always welcome.</p>" +
                                           "<p>Many of our members are playing their first season this year and several of our members represent Scotland across several grades.</p>" +
                                           "<p>Facebook: <a href='https://www.facebook.com/Six-Pack-Touch-Rugby-Edinburgh-191653284196382/' target='_blank'>Visit</a></p>"
                                  },
                      "Hoodlums": { "bio": "<p>Hoodlums is an Aberdeen-based touch rugby club. If you are interested in finding out more about touch or joining the club please send us a message.</p>" +
                                           "<p>Facebook: <a href='https://www.facebook.com/HoodlumsTouch/' target='_blank'>Visit</a></p>" +
                                           "<p>Twitter: <a href='https://twitter.com/hoodlumstouch' target='_blank'>Visit</a></p>"
                                  },
                      "Leopards": { "bio": "<p>We are a mixed club and one of the leading Touch Rugby clubs in Aberdeen and Scotland.</p>" +
                                           "<p>We are all inclusive and cater for all abilities from complete beginner through to expert.</p>" +
                                           "<p>If you're interested in taking up Touch or would like to know more about the club, then please come along or contact the club for more details.</p>" +
                                           "<p>Facebook: <a href='https://www.facebook.com/LeopardsTouch/' target='_blank'>Visit</a></p>"
                                  },
                      "Glasgow Lions": { "bio": "<p>Glasgow Lions Touch Rugby Club. 'For all' ages and abilities. Come along and join us women and men of Glasgow!</p>" +
                                               "<p>Facebook: <a href='https://www.facebook.com/GlasgowLionsTRC' target='_blank'>Visit</a></p>" +
                                               "<p>Twitter: <a href='https://twitter.com/glasgowlions' target='_blank'>Visit</a></p>" +
                                               "<p>Website: <a href='http://www.glasgowlions.com/' target='_blank'>Visit</a></p>"
                                       },
                      "Glasgow Centurions": { "bio": "<p>Glasgow Centurions Touch Club are a new Glasgow social mixed, men’s and women’s, touch rugby club established in September 2014.</p>" +
                                                     "<p>We are always on the lookout for new members to join our ranks regardless of age, sex or experience!</p>" +
                                                     "<p>Facebook: <a href='https://www.facebook.com/GlasgowLionsTRC' target='_blank'>Visit</a></p>" +
                                                     "<p>Twitter: <a href='https://twitter.com/centuriontouch' target='_blank'>Visit</a></p>" +
                                                     "<p>Website: <a href='http://www.centurionstouch.co.uk/' target='_blank'>Visit</a></p>"
                                            },
                      "Glasgow Blue Jays": { "bio": "<p>A club started by a group of friends in 2011 and has continued to grow over the past couple of years.</p>" +
                                                    "<p>We play in the Glasgow league, STS tournaments and any other tournaments that take our fancy.</p>" +
                                                    "<p>Facebook: <a href='https://www.facebook.com/groups/399338000096978/' target='_blank'>Visit</a></p>" +
                                                    "<p>Twitter: <a href='https://twitter.com/glasgowbluejays' target='_blank'>Visit</a></p>"
                                            },
                      "Glasgow Phoenix": { "bio":  "<p>Glasgow Phoenix is the city’s newest Touch Rugby Team. Our crew of guys and girls are here to welcome you to this fantastic new variation on rugby.</p>" +
                                                   "<p>There’s no hard contact, teams are mixed and no experience is necessary.</p>" +
                                                   "<p>If you’re looking to gain fitness, get involved with a terrific sport and play in a unique mixed team environment then Touch Rugby is for you.</p>" +
                                                   "<p>Facebook: <a href='https://www.facebook.com/GlasgowPhoenixTouchTeam/' target='_blank'>Visit</a></p>" +
                                                   "<p>Twitter: <a href='https://twitter.com/glgphoenix' target='_blank'>Visit</a></p>" +
                                                   "<p>Website: <a href='http://www.glasgowphoenix.co.uk/' target='_blank'>Visit</a></p>"
                                          },
                      "Edinburgh Superhands": { "bio":  "<p>Superhands is an Edinburgh-based Touch Rugby ('Touch') club. We train together once a week under the expert guidance of our coach, Pierre, and we compete in summer leagues in Edinburgh and weekend tournaments across Scotland, and occasionally further afield.</p>" +
                                                        "<p>The club's defining characteristics are its social and friendly atmosphere, and its commitment to the development of all our players, whatever their individual skill level or experience.</p>" +
                                                        "<p>Facebook: <a href='https://www.facebook.com/superhandstouch/' target='_blank'>Visit</a></p>" +
                                                        "<p>Twitter: <a href='https://twitter.com/superhandstouch' target='_blank'>Visit</a></p>" +
                                                        "<p>Website: <a href='http://www.superhandstouch.org.uk/' target='_blank'>Visit</a></p>"
                                          },
                      "Meerkats": { "bio":  "<p>Touch Football Club based in Scotland. We play predominately in the Edinburgh and Aberdeen leagues and the Scottish Touch Series.</p>" +
                                            "<p>Currently trying expand our club, all new and experienced players welcome.</p>" +
                                            "<p>Facebook: <a href='https://www.facebook.com/meerkatstouchscotland' target='_blank'>Visit</a></p>" +
                                            "<p>Twitter: <a href='https://twitter.com/meerkatstouch' target='_blank'>Visit</a></p>" +
                                            "<p>Email: meerkatstouch@hotmail.co.uk</p>"     
                                          },
                      "Northampton COYS": { "bio": "<p>Playing at CTS, DTS and social level, across the country.</p>" +
                                                   "<p>The biggest Touch club in the East Midlands, always looking for players of all abilities, from beginners to pros.</p>" +
                                                   "<p>Facebook: <a href='https://www.facebook.com/COYSTouchRugby/' target='_blank'>Visit</a></p>" +
                                                   "<p>Twitter: <a href='https://twitter.com/coystouchrugby' target='_blank'>Visit</a></p>"
                                          },
                      "Mawsley": { "bio": "<p>Mawsley Touch Rugby Club, formed in 2012, is a mixed, successful touch rugby club based in Northamptonshire. Our emphasis is on fun and fitness although we do play competitive games in the Summer months.</p>" +
                                          "<p>We are always keen to hear from new players looking to join us, whatever your background or experience level. You DO NOT need any experience to join us.</p>" +
                                          "<p>Facebook: <a href='https://www.facebook.com/groups/205733109557441/' target='_blank'>Visit</a></p>" +
                                          "<p>Twitter: <a href='https://twitter.com/coystouchrugby' target='_blank'>Visit</a></p>" +
                                          "<p>Website: <a href='http://www.mawsleyvillage.co.uk/mawsley-touch-rugby' target='_blank'>Visit</a></p>"
                                 },
                      "Chester Cheetahs": { "bio": "<p>Come and touch a live Cheetah every Thursday 18.00pm at Chester RUFC. A mixed sport for all ages, keeping fit and playing touch rugby. GOOOOOooooo Cheetahs</p>" +
                                                   "<p>Facebook: <a href='https://www.facebook.com/cheetahschester/' target='_blank'>Visit</a></p>" +
                                                   "<p>Twitter: <a href='https://twitter.com/Ches_Cheetahs' target='_blank'>Visit</a></p>" +
                                                   "<p>Website: <a href='http://www.pitchero.com/clubs/chesterrufc/teams/138311' target='_blank'>Visit</a></p>"
                                          },
                      "Horsham Tigers": { "bio":   "<p>We are an established touch rugby team who offer a place where people can exercise and play hard in a fun and social setting with like-minded people.</p>" +
                                                   "<p>We welcome everyone, regardless of how often you can make it down. Our members are varied in their skill / fitness /age and gender, and we always work with your individual abilities & needs, excluding nobody.</p>" +
                                                   "<p>Facebook: <a href='https://www.facebook.com/HorshamRugbyClub/' target='_blank'>Visit</a></p>" +
                                                   "<p>Twitter: <a href='https://twitter.com/horshamtouch' target='_blank'>Visit</a></p>" +
                                                   "<p>Website: <a href='http://www.horshamrufc.com/teams/71878' target='_blank'>Visit</a></p>"
                                          },
                      "Blackadders": { "bio":  "<p>Blackadders train every Wednesday and Thursday evening at Rockcliff rugby club from 6:30 - 7:30.</p>" +
                                               "<p>Facebook: <a href='https://www.facebook.com/BlackaddersTouch/' target='_blank'>Visit</a></p>" +
                                               "<p>Twitter: <a href='https://twitter.com/adders_touch' target='_blank'>Visit</a></p>" +
                                               "<p>Website: <a href='http://www.blackadderstouchrugby.co.uk/' target='_blank'>Visit</a></p>"
                                          },
                      "Vikings": { "bio":  "<p>Home of the TV Vikings, one of the leading touch rugby clubs in the UK since 2005.</p>" +
                                           "<p>We welcome all abilities, so if you are interested in getting involved in playing then get in touch.</p>" +
                                            "<p>Facebook: <a href='https://www.facebook.com/ThamesValleyVikings/' target='_blank'>Visit</a></p>" +
                                            "<p>Twitter: <a href='https://twitter.com/TVVikingsTouch' target='_blank'>Visit</a></p>" +
                                            "<p>Website: <a href='http://www.pitchero.com/clubs/thamesvalleyvikingsandvixens' target='_blank'>Visit</a></p>"
                                          },
                      "Nomads": { "bio":    "<p>North Norfolk Touch was set up in 2015 by Soul Phoenix to provide local people with the opportunity to learn, play and enjoy this truly amazing sport.</p>" +
                                            "<p>Facebook: <a href='https://www.facebook.com/nomadstouch/' target='_blank'>Visit</a></p>" +
                                            "<p>Twitter: <a href='https://twitter.com/nomadstouchrug1' target='_blank'>Visit</a></p>" +
                                            "<p>Website: <a href='http://www.pitchero.com/clubs/nomadstouchrugby/' target='_blank'>Visit</a></p>" +
                                            "<p>Email:  soulphoenix@hotmail.com</p>"
                                          },
                      "Icenians": { "bio":  "<p>University of Anglia Touh Rugby.</p>" +
                                            "<p>Facebook: <a href='https://www.facebook.com/UEATRC' target='_blank'>Visit</a></p>" +
                                            "<p>Twitter: <a href='https://twitter.com/UeaTouch' target='_blank'>Visit</a></p>" +
                                            "<p>Website: <a href='http://www.ueatouch.co.uk/' target='_blank'>Visit</a></p>" +
                                            "<p>Email:  ueatouch@gmail.com</p>"
                                          },
                      "Norwich Rebels": { "bio":  "<p>Join us, our sessions are open to all. We currently run Sunday morning sessions (10AM), and Tuesday evening sessions (6PM) both at Eaton Park.</p>" +
                                                  "<p>Facebook: <a href='https://www.facebook.com/groups/104554586269779/' target='_blank'>Visit</a></p>" +
                                                  "<p>Website: <a href='http://www.norwichrebels.com/' target='_blank'>Visit</a></p>" +
                                                  "<p>Email:  contact@norwichrebels.com</p>"
                                          },
                      "Mowhawks": { "bio":  "<p>Maidenhead RFC Mohawks play non-contact TOUCH (rugby). New members (male and female) always welcome to join us</p>" +
                                            "<p>Facebook: <a href='https://www.facebook.com/MaidenheadMohawks/' target='_blank'>Visit</a></p>" +
                                            "<p>Twitter: <a href='https://twitter.com/mohawkstouch' target='_blank'>Visit</a>" +
                                            "<p>Website: <a href='http://www.maidenheadrfc.com/Mohawks.php' target='_blank'>Visit</a></p>" +
                                            "<p>Email:  mohawkstouch@gmail.com</p>"
                                          },
                      "Lufbra": { "bio":  "<p>A social society for both males and females of every level from International players to total Newbies!</p>" +
                                          "<p>Facebook: <a href='https://www.facebook.com/groups/382702875134615/' target='_blank'>Visit</a></p>" +
                                          "<p>Twitter: <a href='https://twitter.com/lufbratouch' target='_blank'>Visit</a>" +
                                          "<p>Website: <a href='https://www.lsu.co.uk/society/touchrugby/' target='_blank'>Visit</a></p>"
                                          },
                      "Nailsea": { "bio":  "<p>With mixed teams of all ages and abilities everyone is welcome to try out this great sport.</p>" +
                                          "<p>Facebook: <a href='https://www.facebook.com/Nailsea-Backwell-Touch-Rugby-744826638898067/' target='_blank'>Visit</a></p>" +
                                          "<p>Twitter: <a href='https://twitter.com/nandbtouchrugby' target='_blank'>Visit</a>" +
                                          "<p>Website: <a href='http://www.pitchero.com/clubs/nailseabackwell' target='_blank'>Visit</a></p>"
                                          },
                      "St Marys": { "bio":  "<p>Touch is a minimal contact sport suitable for all, whether rediscovering sport or wanting to get fit. A great way to socialise & have fun. No exp needed</p>" +
                                          "<p>Facebook: <a href='https://www.facebook.com/SMOBTOUCH/' target='_blank'>Visit</a></p>" +
                                          "<p>Twitter: <a href='https://twitter.com/smobrugby' target='_blank'>Visit</a>" +
                                          "<p>Website: <a href='http://www.pitchero.com/clubs/stmarysoldboysrfc/news/our-o2-touch-centre-is-now-featured-as-an-o2-prior-1722094.html' target='_blank'>Visit</a></p>"
                                          },
                      "Bath University": { "bio":  "<p>The University of Bath rugby programme includes a mixed touch team, welcoming both men and women of all abilities to the pitch – from first-time players to internationals.</p>" +
                                                   "<p>Facebook: <a href='https://www.facebook.com/SMOBTOUCH/' target='_blank'>Visit</a></p>" +
                                                   "<p>Twitter: <a href='https://twitter.com/uobathtouch' target='_blank'>Visit</a>" +
                                                   "<p>Website: <a href='https://www.teambath.com/sport/rugby/teams-training-times/touch-rugby/' target='_blank'>Visit</a></p>"
                                          }

                }

    // Snazzy Map Style - https://snazzymaps.com/style/8097/wy
    //var mapStyle = [{'featureType': 'all', 'elementType': 'geometry.fill', 'stylers': [{'weight': '2.00'}]}, {'featureType': 'all', 'elementType': 'geometry.stroke', 'stylers': [{'color': '#9c9c9c'}]}, {'featureType': 'all', 'elementType': 'labels.text', 'stylers': [{'visibility': 'on'}]}, {'featureType': 'landscape', 'elementType': 'all', 'stylers': [{'color': '#f2f2f2'}]}, {'featureType': 'landscape', 'elementType': 'geometry.fill', 'stylers': [{'color': '#ffffff'}]}, {'featureType': 'landscape.man_made', 'elementType': 'geometry.fill', 'stylers': [{'color': '#ffffff'}]}, {'featureType': 'poi', 'elementType': 'all', 'stylers': [{'visibility': 'off'}]}, {'featureType': 'road', 'elementType': 'all', 'stylers': [{'saturation': -100}, {'lightness': 45}]}, {'featureType': 'road', 'elementType': 'geometry.fill', 'stylers': [{'color': '#eeeeee'}]}, {'featureType': 'road', 'elementType': 'labels.text.fill', 'stylers': [{'color': '#7b7b7b'}]}, {'featureType': 'road', 'elementType': 'labels.text.stroke', 'stylers': [{'color': '#ffffff'}]}, {'featureType': 'road.highway', 'elementType': 'all', 'stylers': [{'visibility': 'simplified'}]}, {'featureType': 'road.arterial', 'elementType': 'labels.icon', 'stylers': [{'visibility': 'off'}]}, {'featureType': 'transit', 'elementType': 'all', 'stylers': [{'visibility': 'off'}]}, {'featureType': 'water', 'elementType': 'all', 'stylers': [{'color': '#46bcec'}, {'visibility': 'on'}]}, {'featureType': 'water', 'elementType': 'geometry.fill', 'stylers': [{'color': '#c8d7d4'}]}, {'featureType': 'water', 'elementType': 'labels.text.fill', 'stylers': [{'color': '#070707'}]}, {'featureType': 'water', 'elementType': 'labels.text.stroke', 'stylers': [{'color': '#ffffff'}]}];

    // Create the map
    var map = new google.maps.Map($('.map-canvas')[0], {
        zoom: 5,
        //styles: mapStyle,
        center: new google.maps.LatLng(52.4016798, -5.2837261)
    });

    var markers = [ { name: 'Varsity Vandals', lat: 51.489401, long: -3.203586, title: 'Varsity Vandals Touch', icon_color: '#ff61b4', image: 'vandals_banner.jpg' },
                    { name: 'Gower Dragons', lat: 51.572589, long: -4.051466, title: 'Gower Dragons Touch', icon_color: '#FF0000', image: 'gower_banner.jpg' },
                    { name: 'Raptors', lat: 51.492007, long: -3.201719, title: 'Cardiff Raptors Touch', icon_color: '#05950a', image: 'raptors_banner.jpeg' },
                    { name: 'Coyotes', lat: 51.507530, long: -3.232264, title: 'Coyotes Cardiff Touch', icon_color: '#5a5a5a', image: 'coyotes_banner.jpg' },
                    { name: 'Phoenix', lat: 51.427040, long: -3.186492, title: 'Phoenix Touch', icon_color: '#3B59B6', image: 'phoenix_banner.jpeg' },
                    { name: 'Rebellion', lat: 51.616777, long: -3.425001, title: 'Rebellion Touch', icon_color: '#FF0000', image: 'rebellion_banner.jpg' },
                    { name: 'OSW', lat: 51.460081, long: -2.603354, title: 'Old South Wales Touch', icon_color: '#D3D3D3', image: 'osw_banner.jpeg' },
                    { name: 'Kiwi', lat: 51.517129, long: -3.240999, title: 'Kiwi Dragons Touch', icon_color: '#000000', image: 'kiwi_banner.jpeg' },
                    { name: 'Llangain', lat: 51.848165, long: -4.328179, title: 'Llangain Touch', icon_color: '#FFB80E', image: 'llangain_banner.jpg' },
                    { name: 'Cobras', lat: 51.854403, long: -4.315787, title: 'Camarthen Cobras Touch', icon_color: '#5a5a5a', image: 'cobras_banner.jpg' },
                    { name: 'Plasmawr', lat: 51.497313, long: -3.246692, title: 'Plasmawr Stags Touch', icon_color: '#000000', image: 'plasmawr_stags_banner.jpg' },
                    { name: 'Guerillas', lat: 57.139238, long: -2.178131, title: 'Guerillas Touch', icon_color: '#FF0000', image: 'guerillas_banner.jpg' },
                    { name: 'Stirling Storm', lat: 56.128692, long: -3.931860, title: 'Stirling Storm Touch', icon_color: '#6A0F5A', image: 'stirlings_banner.jpg' },
                    { name: 'Galaxy Scotland', lat: 55.973691, long: -3.254358, title: 'Galaxy Scotland Touch', icon_color: '#000000', image: 'galaxy_scotland_banner.jpg' },
                    { name: 'Buffalos', lat: 55.94216, long: -3.198139, title: 'Buffalos Touch', icon_color: '#ff61b4', image: 'buffalos_banner.jpg' },
                    { name: 'Six Pack', lat: 55.964924, long: -3.222354, title: 'Six Pack Touch', icon_color: '#4285F4', image: 'six_pack_banner.jpg' },
                    { name: 'Hoodlums', lat: 57.162747, long: -2.094108, title: 'Hoodlums Touch', icon_color: '#ff61b4', image: 'hoodlums_banner.jpg' },
                    { name: 'Leopards', lat: 57.174909, long: -2.136079, title: 'Leopards Touch', icon_color: '#000000', image: 'leopards_banner.jpg' },
                    { name: 'Glasgow Lions', lat: 55.848763, long: -4.235071, title: 'Glasgow Lions Touch', icon_color: '#000000', image: 'glasgow_lions_banner.jpg' },
                    { name: 'Glasgow Centurions', lat: 55.876775, long: -4.333513, title: 'Glasgow Centurions Touch', icon_color: '#525C65', image: 'glasgow_centurions_banner.jpg' },
                    { name: 'Glasgow Blue Jays', lat: 55.876742, long: -4.336243, title: 'Glasgow Blue Jays Touch', icon_color: '#ADD8E6', image: 'glasgow_blue_jays_banner.jpg' },
                    { name: 'Glasgow Phoenix', lat: 55.848725, long: -4.134813, title: 'Glasgow Phoenix Touch', icon_color: '#000000', image: 'glasgow_phoenix_banner.jpg' },
                    { name: 'Edinburgh Superhands', lat: 55.940800, long: -3.194906, title: 'Edinburgh Superhands Touch', icon_color: '#2FC2EF', image: 'superhands_banner.jpeg' },
                    { name: 'Meerkats', lat: 55.963502, long: -3.217582, title: 'Meerkats Touch', icon_color: '#D3D3D3', image: 'meerkats_banner.jpg' },
                    { name: 'Northampton COYS', lat: 52.228787, long: -0.864090, title: 'Northampton COYS Touch', icon_color: '#085a7f', image: 'northampton_coys_banner.jpg' },
                    { name: 'Mawsley', lat: 52.376484, long: -0.810652, title: 'Mawsley Touch', icon_color: '#000080', image: 'mawsley_banner.jpg' },
                    { name: 'Chester Cheetahs', lat: 53.197489, long: -2.842937, title: 'Chester Cheetahs Touch', icon_color: '#cd0802', image: 'chester_cheetahs_banner.jpg' },
                    { name: 'Horsham Tigers', lat: 51.055943, long: -0.293169, title: 'Horsham Tigers Touch', icon_color: '#348912', image: 'horsham_banner.jpg' },
                    { name: 'Blackadders', lat: 55.037193, long: -1.449901, title: 'Blackadders Touch', icon_color: '#FFA500', image: 'blackadders_banner.jpg' },
                    { name: 'Vikings', lat: 51.465979, long: -0.912803, title: 'Thames Valley Vikings Touch', icon_color: '#2FC2EF', image: 'thames_valley_banner.jpeg' },
                    { name: 'Nomads', lat: 52.919160, long: 1.118560, title: 'Nomads Touch', icon_color: '#000000', image: 'nomads_banner.jpeg' },
                    { name: 'Icenians', lat: 52.624609, long: 1.240875, title: 'UAE Touch Rugby', icon_color: '#00004D', image: 'icenians_banner.jpg' },
                    { name: 'Norwich Rebels', lat: 52.619822, long: 1.256304, title: 'Norwich Rebels Touch', icon_color: '#FF0000', image: 'norwich_rebels_banner.jpg' },
                    { name: 'Mowhawks', lat: 51.512303, long: -0.716213, title: 'Maidenhead Mowhawks Touch', icon_color: '#000000', image: 'mowhawks_banner.jpg' },
                    { name: 'Lufbra', lat: 52.768162, long: -1.225329, title: 'LSU Touch', icon_color: '#FF0000', image: 'lufbra_banner.jpeg' },
                    { name: 'Nailsea', lat: 51.429908, long: -2.759162, title: 'Nailsea Touch', icon_color: '#000000', image: 'nailsea_banner.jpg' },
                    { name: 'St Marys', lat: 51.538564, long: -2.527620, title: 'St Marys Old Boys Touch', icon_color: '#000000', image: 'st_marys_banner.jpg' },
                    { name: 'Bath University', lat: 51.377654, long: -2.324313, title: 'Bath University Touch', icon_color: '#004A91', image: 'bath_university_banner.jpeg' }
                  ]

    var template = Handlebars.compile($('#marker-content-template').html());

    $.each(markers, function(i, e) {

      var info = null;
      var closeDelayed = false;
      var closeDelayHandler = function() {
      $(info.getWrapper()).removeClass('active');
        setTimeout(function() {
            closeDelayed = true;
            info.close();
        }, 300);
      };

      var marker = new google.maps.Marker({
        map: map,
        icon: createIcon(e.icon_color),
        position: new google.maps.LatLng(e.lat, e.long),
        title: e.title
      });

      var info = new SnazzyInfoWindow($.extend({},{
        marker: marker,
        wrapperClass: 'custom-window',
        offset: {
            top: '-72px'
        },
        edgeOffset: {
            top: 50,
            right: 60,
            bottom: 50
        },
        border: false,
        closeButtonMarkup: '<button type="button" class="custom-close">&#215;</button>',
        content: template({
            title: e.title,
            bgImg: '/images/' + e.image,
            body: touch_bio[e.name].bio
        }),
        callbacks: {
            open: function() {
                $(this.getWrapper()).addClass('open');
            },
            afterOpen: function() {
                var wrapper = $(this.getWrapper());
                wrapper.addClass('active');
                wrapper.find('.custom-close').on('click', closeDelayHandler);
            },
            beforeClose: function() {
                if (!closeDelayed) {
                    closeDelayHandler();
                    return false;
                }
                return true;
            },
            afterClose: function() {
                var wrapper = $(this.getWrapper());
                wrapper.find('.custom-close').off();
                wrapper.removeClass('open');
                closeDelayed = false;
            }
        }
    }));
  });

});