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
    // Snazzy Map Style - https://snazzymaps.com/style/8097/wy
    //var mapStyle = [{'featureType': 'all', 'elementType': 'geometry.fill', 'stylers': [{'weight': '2.00'}]}, {'featureType': 'all', 'elementType': 'geometry.stroke', 'stylers': [{'color': '#9c9c9c'}]}, {'featureType': 'all', 'elementType': 'labels.text', 'stylers': [{'visibility': 'on'}]}, {'featureType': 'landscape', 'elementType': 'all', 'stylers': [{'color': '#f2f2f2'}]}, {'featureType': 'landscape', 'elementType': 'geometry.fill', 'stylers': [{'color': '#ffffff'}]}, {'featureType': 'landscape.man_made', 'elementType': 'geometry.fill', 'stylers': [{'color': '#ffffff'}]}, {'featureType': 'poi', 'elementType': 'all', 'stylers': [{'visibility': 'off'}]}, {'featureType': 'road', 'elementType': 'all', 'stylers': [{'saturation': -100}, {'lightness': 45}]}, {'featureType': 'road', 'elementType': 'geometry.fill', 'stylers': [{'color': '#eeeeee'}]}, {'featureType': 'road', 'elementType': 'labels.text.fill', 'stylers': [{'color': '#7b7b7b'}]}, {'featureType': 'road', 'elementType': 'labels.text.stroke', 'stylers': [{'color': '#ffffff'}]}, {'featureType': 'road.highway', 'elementType': 'all', 'stylers': [{'visibility': 'simplified'}]}, {'featureType': 'road.arterial', 'elementType': 'labels.icon', 'stylers': [{'visibility': 'off'}]}, {'featureType': 'transit', 'elementType': 'all', 'stylers': [{'visibility': 'off'}]}, {'featureType': 'water', 'elementType': 'all', 'stylers': [{'color': '#46bcec'}, {'visibility': 'on'}]}, {'featureType': 'water', 'elementType': 'geometry.fill', 'stylers': [{'color': '#c8d7d4'}]}, {'featureType': 'water', 'elementType': 'labels.text.fill', 'stylers': [{'color': '#070707'}]}, {'featureType': 'water', 'elementType': 'labels.text.stroke', 'stylers': [{'color': '#ffffff'}]}];

    // Create the map
    var map = new google.maps.Map($('.map-canvas')[0], {
        zoom: 5,
        //styles: mapStyle,
        center: new google.maps.LatLng(52.4016798, -5.2837261)
    });

    // *********************
    // Markers
    // *********************
    // Wales
    var vandalsMarker = new google.maps.Marker({
        map: map,
        icon: createIcon('#ff61b4'),
        position: new google.maps.LatLng(51.489401, -3.203586),
        title: 'Varsity Vandals Touch'
    });

    var raptorsMarker = new google.maps.Marker({
        map: map,
        icon: createIcon('#05950a'),
        position: new google.maps.LatLng(51.492007, -3.201719),
        title: 'Cardiff Raptors Touch'
    });

    var coyotesMarker = new google.maps.Marker({
        map: map,
        icon: createIcon('#5a5a5a'),
        position: new google.maps.LatLng(51.507530, -3.232264),
        title: 'Coyotes Cardiff Touch'
    });

    var phoenixMarker = new google.maps.Marker({
        map: map,
        icon: createIcon('#3B59B6'),
        position: new google.maps.LatLng(51.427040, -3.186492),
        title: 'Phoenix Touch Rugby'
    });

    var kiwisMarker = new google.maps.Marker({
        map: map,
        icon: createIcon('#000000'),
        position: new google.maps.LatLng(51.517129, -3.240999),
        title: 'Kiwi Dragons Touch Rugby'
    });

    var gowerDragonsMarker = new google.maps.Marker({
        map: map,
        icon: createIcon('#FF0000'),
        position: new google.maps.LatLng(51.572589, -4.051466),
        title: 'Gower Dragons Touch Rugby'
    });

    var llangainMarker = new google.maps.Marker({
        map: map,
        icon: createIcon('#FFB80E'),
        position: new google.maps.LatLng(51.848165, -4.328179),
        title: 'Gower Dragons Touch Rugby'
    });

    var cobrasMarker = new google.maps.Marker({
        map: map,
        icon: createIcon('#5a5a5a'),
        position: new google.maps.LatLng(51.854403, -4.315787),
        title: 'Gower Dragons Touch Rugby'
    });

    var plasmawrStagsMarker = new google.maps.Marker({
        map: map,
        icon: createIcon('#000000'),
        position: new google.maps.LatLng(51.497313, -3.246692),
        title: 'Plasmawr Stags Touch'
    });

    // Scotland
    var guerillasMarker = new google.maps.Marker({
        map: map,
        icon: createIcon('#FF0000'),
        position: new google.maps.LatLng(57.139238, -2.178131),
        title: 'Guerillas Touch Rugby'
    });

    var stirlingsMarker = new google.maps.Marker({
        map: map,
        icon: createIcon('#6A0F5A'),
        position: new google.maps.LatLng(56.128692, -3.931860),
        title: 'Stirling Storm Touch Rugby'
    });

    var galaxyScotlandMarker = new google.maps.Marker({
        map: map,
        icon: createIcon('#000000'),
        position: new google.maps.LatLng(55.973691, -3.254358),
        title: 'Galaxy Scotland Touch Rugby'
    });

    var buffalosMarker = new google.maps.Marker({
        map: map,
        icon: createIcon('#ff61b4'),
        position: new google.maps.LatLng(55.94216, -3.198139),
        title: 'Buffalos Touch Rugby'
    });

    var sixPackMarker = new google.maps.Marker({
        map: map,
        icon: createIcon('#4285F4'),
        position: new google.maps.LatLng(55.964924, -3.222354),
        title: 'Six Pack Touch'
    });

    var hoodlumsMarker = new google.maps.Marker({
        map: map,
        icon: createIcon('#ff61b4'),
        position: new google.maps.LatLng(57.162747, -2.094108),
        title: 'Hoodlums Touch'
    });

    var leopardsMarker = new google.maps.Marker({
        map: map,
        icon: createIcon('#000000'),
        position: new google.maps.LatLng(57.174909, -2.136079),
        title: 'Leopards Touch'
    });

    var glasgowLionsMarker = new google.maps.Marker({
        map: map,
        icon: createIcon('#000000'),
        position: new google.maps.LatLng(55.848763, -4.235071),
        title: 'Glasgow Lions Touch'
    });


    // England
    var northamptonCoysMarker = new google.maps.Marker({
        map: map,
        icon: createIcon('#085a7f'),
        position: new google.maps.LatLng(52.228787, -0.864090),
        title: 'Northampton COYS Touch Rugby'
    });

    var mawsleyMarker = new google.maps.Marker({
        map: map,
        icon: createIcon('#000080'),
        position: new google.maps.LatLng(52.376484, -0.810652),
        title: 'Mawsley Touch Rugby'
    });

    var chesterCheetahsMarker = new google.maps.Marker({
        map: map,
        icon: createIcon('#cd0802'),
        position: new google.maps.LatLng(53.197489, -2.842937),
        title: 'Chester Cheetahs Touch Rugby'
    });

    // Set up handle bars
    var template = Handlebars.compile($('#marker-content-template').html());

    var closeDelayed = false;
    var closeVandals = function() {
        $(vandalsInfoWindow.getWrapper()).removeClass('active');
        setTimeout(function() {
            closeDelayed = true;
            vandalsInfoWindow.close();
        }, 300);
    };

    var closeCoyotes = function() {
        $(coyotesInfoWindow.getWrapper()).removeClass('active');
        setTimeout(function() {
            closeDelayed = true;
            coyotesInfoWindow.close();
        }, 300);
    };

    var closeRaptors = function() {
        $(raptorsInfoWindow.getWrapper()).removeClass('active');
        setTimeout(function() {
            closeDelayed = true;
            raptorsInfoWindow.close();
        }, 300);
    };

    var closePhoenix = function() {
        $(phoenixInfoWindow.getWrapper()).removeClass('active');
        setTimeout(function() {
            closeDelayed = true;
            phoenixInfoWindow.close();
        }, 300);
    };

    var closeKiwis = function() {
        $(kiwisInfoWindow.getWrapper()).removeClass('active');
        setTimeout(function() {
            closeDelayed = true;
            kiwisInfoWindow.close();
        }, 300);
    };

    var closeGower = function() {
        $(gowerInfoWindow.getWrapper()).removeClass('active');
        setTimeout(function() {
            closeDelayed = true;
            gowerInfoWindow.close();
        }, 300);
    };

    var closeLlangain = function() {
        $(llangainInfoWindow.getWrapper()).removeClass('active');
        setTimeout(function() {
            closeDelayed = true;
            llangainInfoWindow.close();
        }, 300);
    };

    var closeCobras = function() {
        $(cobrasInfoWindow.getWrapper()).removeClass('active');
        setTimeout(function() {
            closeDelayed = true;
            cobrasInfoWindow.close();
        }, 300);
    };

    var closePlasmawrStags = function() {
        $(plasmawrStagsInfoWindow.getWrapper()).removeClass('active');
        setTimeout(function() {
            closeDelayed = true;
            plasmawrStagsInfoWindow.close();
        }, 300);
    };

    // Scotland
    var closeGuerillas = function() {
        $(guerillasInfoWindow.getWrapper()).removeClass('active');
        setTimeout(function() {
            closeDelayed = true;
            guerillasInfoWindow.close();
        }, 300);
    };

    var closeStirlings = function() {
        $(stirlingsInfoWindow.getWrapper()).removeClass('active');
        setTimeout(function() {
            closeDelayed = true;
            stirlingsInfoWindow.close();
        }, 300);
    };

    var closeGalaxyScotland = function() {
        $(galaxyScotlandInfoWindow.getWrapper()).removeClass('active');
        setTimeout(function() {
            closeDelayed = true;
            galaxyScotlandInfoWindow.close();
        }, 300);
    };

    var closeBuffalos = function() {
        $(buffalosInfoWindow.getWrapper()).removeClass('active');
        setTimeout(function() {
            closeDelayed = true;
            buffalosInfoWindow.close();
        }, 300);
    };

    var closeSixPack = function() {
        $(sixPackInfoWindow.getWrapper()).removeClass('active');
        setTimeout(function() {
            closeDelayed = true;
            sixPackInfoWindow.close();
        }, 300);
    };

    var closeHoodlums = function() {
        $(hoodlumsInfoWindow.getWrapper()).removeClass('active');
        setTimeout(function() {
            closeDelayed = true;
            hoodlumsInfoWindow.close();
        }, 300);
    };

    var closeLeopards = function() {
        $(leopardsInfoWindow.getWrapper()).removeClass('active');
        setTimeout(function() {
            closeDelayed = true;
            leopardsInfoWindow.close();
        }, 300);
    };

    var closeGlasgowLions = function() {
        $(glasgowLionsInfoWindow.getWrapper()).removeClass('active');
        setTimeout(function() {
            closeDelayed = true;
            glasgowLionsInfoWindow.close();
        }, 300);
    };

    // England
    var closeNorthamptonCoys = function() {
        $(northamptonCoysInfoWindow.getWrapper()).removeClass('active');
        setTimeout(function() {
            closeDelayed = true;
            northamptonCoysInfoWindow.close();
        }, 300);
    };

    var closeMawsley = function() {
        $(mawsleyInfoWindow.getWrapper()).removeClass('active');
        setTimeout(function() {
            closeDelayed = true;
            mawsleyInfoWindow.close();
        }, 300);
    };

    var closeChesterCheetahs = function() {
        $(chesterCheetahsInfoWindow.getWrapper()).removeClass('active');
        setTimeout(function() {
            closeDelayed = true;
            chesterCheetahsInfoWindow.close();
        }, 300);
    };

    // Add a Snazzy Info Window to the Vandals marker
    var vandalsInfoWindow = new SnazzyInfoWindow({
        marker: vandalsMarker,
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
            title: 'Varsity Vandals',
            subtitle: 'Touch Rugby For All Abilities',
            bgImg: '/images/vandals_banner.jpg',
            body: '<p>We are a Touch Rugby team based in Cardiff, South Wales. We have over 40 players spread across 7 teams (Mens, Womens and Mixed).</p>' +
                  '<p>We believe Touch Rugby is for everyone, no matter what level you think you may be at.</p>' +
                  "<p>We regularly encourage new players to come to our training sessions on a Sunday Morning <a href='http://www.varsityvandals.com/contact' target='_blank'>Click Here</a> to get in touch and find out more.</p>" +
                  "<p>Website: <a href='http://www.varsityvandals.com/' target='_blank'>Visit</a> </p> " +
                  "<p>Facebook: <a href='https://www.facebook.com/VarsityVandals/' target='_blank'>Visit</a></p>"
        }),
        callbacks: {
            open: function() {
                $(this.getWrapper()).addClass('open');
            },
            afterOpen: function() {
                var wrapper = $(this.getWrapper());
                wrapper.addClass('active');
                wrapper.find('.custom-close').on('click', closeVandals);
            },
            beforeClose: function() {
                if (!closeDelayed) {
                    debugger;
                    closeVandals();
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
    });

    // Add a Snazzy Info Window to the Raptors marker
    var raptorsInfoWindow = new SnazzyInfoWindow({
        marker: raptorsMarker,
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
            title: 'Cardiff Raptors Touch',
            // subtitle: 'Touch Rugby For All Abilities',
            bgImg: '/images/raptors_banner.jpeg',
            body: "<p>The Raptors have two Mixed teams, a Women's, Men's & Junior team.</p>" +
                  "<p>New players are always welcome, regardless of ability/experience.</p>" +
                  "<p>We are currently the most successful team in Wales!</p>" +
                  "<p>2016 Season</p>" +
                  "<ul><li>Wales Touch Series winners</li><li>Touch Rugby Wales Mixed winners</li><li>Touch Rugby Wales Men's winners</li><li>Manchester Fully Charged Events winners</li><li>Nelson Charity Tournament winners</li></ul>" +
                  "<p>2017 season so far</p>" +
                  "<ul><li>Maidenhead Touch Autumn Elite Series winners</li></ul>" +
                  "<p>Website: <a href='http://www.pitchero.com/clubs/cardiffraptorstouch' target='_blank'>Visit</a></p>" +
                  "<p>Facebook: <a href='https://www.facebook.com/CardiffRaptorsTouch/' target='_blank'>Visit</a></p>" +
                  "<p>Email: cardiffraptors@hotmail.co.uk</p>"
        }),
        callbacks: {
            open: function() {
                $(this.getWrapper()).addClass('open');
            },
            afterOpen: function() {
                var wrapper = $(this.getWrapper());
                wrapper.addClass('active');
                wrapper.find('.custom-close').on('click', closeRaptors);
            },
            beforeClose: function() {
                if (!closeDelayed) {
                    closeRaptors();
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
    });

    // Add a Snazzy Info Window to the Coyotes marker
    var coyotesInfoWindow = new SnazzyInfoWindow({
        marker: coyotesMarker,
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
            title: 'Coyotes Cardiff Touch',
            // subtitle: 'Touch Rugby For All Abilities',
            bgImg: '/images/coyotes_banner.jpg',
            body: '<p>Coyote Cardiff Touch are a touch rugby team from Cardiff, Wales.</p>' +
                  '<p>Previously known as Durka Touch aka The Durka Durkas, we were formed in 2005 and brought together both experienced players and those new to the game with an ethos of attractive running rugby and having a massive party afterwards.</p>' +
                  '<p>Domestically, we operate men’s sides, mixed sides and women’s sides in the Cardiff Leagues. Over the last few years we have also competed in the Wales Touch Association‘s Wales Touch Series (WTS) and also in the England Touch Association’s National Touch Series (NTS) and finished within the top 8 sides in the country on many occasions.</p>' +
                  '<p>We are proud that many of our players have represented Wales in Men’s Open, Women’s Open, Mixed Open and Mens Over 30s categories.</p>' +
                  "<p>Website: <a href='http://cardifftouch.com/' target='_blank'>Visit</a></p>" +
                  "<p>Facebook: <a href='https://www.facebook.com/cardifftouch/' target='_blank'>Visit</a></p>"
        }),
        callbacks: {
            open: function() {
                $(this.getWrapper()).addClass('open');
            },
            afterOpen: function() {
                var wrapper = $(this.getWrapper());
                wrapper.addClass('active');
                wrapper.find('.custom-close').on('click', closeCoyotes);
            },
            beforeClose: function() {
                if (!closeDelayed) {
                    closeCoyotes();
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
    });

    // Add a Snazzy Info Window to the Kiwis marker
    var kiwisInfoWindow = new SnazzyInfoWindow({
        marker: kiwisMarker,
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
            title: 'Kiwi Dragons Touch',
            // subtitle: 'Touch Rugby For All Abilities',
            bgImg: '/images/kiwi_banner.jpeg',
            body: '<p>Est. 1989 - Wales Most Successful Touch Team.</p>' +
                  '<p>Rebuilding for 2017 - New players welcome. Our ethos, our success, indeed our culture is unique</p>' +
                  "<p>Twitter: <a href='https://twitter.com/kiwidragons1989' target='_blank'>Visit</a></p>"
        }),
        callbacks: {
            open: function() {
                $(this.getWrapper()).addClass('open');
            },
            afterOpen: function() {
                var wrapper = $(this.getWrapper());
                wrapper.addClass('active');
                wrapper.find('.custom-close').on('click', closeKiwis);
            },
            beforeClose: function() {
                if (!closeDelayed) {
                    closeKiwis();
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
    });

    // Add a Snazzy Info Window to the Phoenix marker
    var phoenixInfoWindow = new SnazzyInfoWindow({
        marker: phoenixMarker,
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
            title: 'Phoenix Touch Rugby',
            // subtitle: 'Touch Rugby For All Abilities',
            bgImg: '/images/phoenix_banner.jpeg',
            body: '<p>We are a Mixed, Men’s, Women’s and Junior’s Touch (rugby) club which was formed in 2010.</p>' +
                  '<p>We are affiliated to the Wales Touch Association and are the current Wales Touch Series (WTS) reigning champions, winning the series for the first time in 2015!.</p>' +
                  '<p>We are based at Old Penarthians RFC, in Penarth and train every Friday:</p>' +
                  '<ul><li>Juniors (7- 15 years old) - 5.30pm-6.30pm</li><li>Seniors (16 years +) 6.30pm-8.30pm</li></ul>' +
                  '<p>All new players are welcome and no experience needed!</p>' +
                  "<p>Website: <a href='http://www.pitchero.com/clubs/phoenixtouch' target='_blank'>Visit</a></p>" +
                  "<p>Facebook: <a href='https://www.facebook.com/PhoenixTouch/' target='_blank'>Visit</a></p>" +
                  "<p>Twitter: <a href='https://twitter.com/phoenix_touch/' target='_blank'>Visit</a></p>"
        }),
        callbacks: {
            open: function() {
                $(this.getWrapper()).addClass('open');
            },
            afterOpen: function() {
                var wrapper = $(this.getWrapper());
                wrapper.addClass('active');
                wrapper.find('.custom-close').on('click', closePhoenix);
            },
            beforeClose: function() {
                if (!closeDelayed) {
                    closePhoenix();
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
    });

    // Add a Snazzy Info Window to the Gower marker
    var gowerInfoWindow = new SnazzyInfoWindow({
        marker: gowerDragonsMarker,
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
            title: 'Gower Dragons Touch Rugby',
            // subtitle: 'Touch Rugby For All Abilities',
            bgImg: '/images/gower_banner.jpg',
            body: '<p>We are a Club of players based at South Gower RFC, but have players from all West Swansea and Gower Clubs playing with us-for social or competitive Touch.</p>' +
                  "<p>Website: <a href='http://www.pitchero.com/clubs/gowerdragons' target='_blank'>Visit</a></p>" +
                  "<p>Facebook: <a href='https://www.facebook.com/GowerDragons' target='_blank'>Visit</a></p>" +
                  "<p>Twitter: <a href='https://twitter.com/gowerdragons' target='_blank'>Visit</a></p>"
        }),
        callbacks: {
            open: function() {
                $(this.getWrapper()).addClass('open');
            },
            afterOpen: function() {
                var wrapper = $(this.getWrapper());
                wrapper.addClass('active');
                wrapper.find('.custom-close').on('click', closeGower);
            },
            beforeClose: function() {
                if (!closeDelayed) {
                    closeGower();
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
    });

    // Add a Snazzy Info Window to the Llangain marker
    var llangainInfoWindow = new SnazzyInfoWindow({
        marker: llangainMarker,
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
            title: 'Llangain Touch Rugby',
            // subtitle: 'Touch Rugby For All Abilities',
            bgImg: '/images/llangain_banner.jpg',
            body: '<p>Llangain Touch, which started as community-based a training team, offers high-intensity touch training sessions at the Carmarthen Athletic 3G training barn all year round (Currently training on Sunday nights).</p>' +
                  '<p>Competing in the Llanelli and Carmarthen based WRU leagues as well as the occasional one-day tournament.</p>' +
                  "<p>Website: <a href='http://www.carmarthenquinsrfc.co.uk/News/Article/42739' target='_blank'>Visit</a></p>"
                  
        }),
        callbacks: {
            open: function() {
                $(this.getWrapper()).addClass('open');
            },
            afterOpen: function() {
                var wrapper = $(this.getWrapper());
                wrapper.addClass('active');
                wrapper.find('.custom-close').on('click', closeLlangain);
            },
            beforeClose: function() {
                if (!closeDelayed) {
                    closeLlangain();
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
    });

    // Add a Snazzy Info Window to the Cobras marker
    var cobrasInfoWindow = new SnazzyInfoWindow({
        marker: cobrasMarker,
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
            title: 'Camarthen Cobras Touch Rugby',
            // subtitle: 'Touch Rugby For All Abilities',
            bgImg: '/images/cobras_banner.jpg',
            body: '<p>Carmarthen Cobras are a competitive Touch team that compete in the WTA Llandysul league and WTS tournaments.</p>' +
                  '<p>Training throughout the summer season regularly at Carmarthen Quins RFC training grounds, Abergwili.</p>' +
                  "<p>Facebook: <a href='https://www.facebook.com/groups/1573924976226061/' target='_blank'>Visit</a></p>"
                  
        }),
        callbacks: {
            open: function() {
                $(this.getWrapper()).addClass('open');
            },
            afterOpen: function() {
                var wrapper = $(this.getWrapper());
                wrapper.addClass('active');
                wrapper.find('.custom-close').on('click', closeCobras);
            },
            beforeClose: function() {
                if (!closeDelayed) {
                    closeCobras();
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
    });

    // Add a Snazzy Info Window to the Plasmawr Stags marker
    var plasmawrStagsInfoWindow = new SnazzyInfoWindow({
        marker: plasmawrStagsMarker,
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
            title: 'Plasmawr Stags Touch',
            // subtitle: 'Touch Rugby For All Abilities',
            bgImg: '/images/plasmawr_stags_banner.jpg',
            body: '<p>Touch Rugby team made up of former Ysgol Plasmawr pupils. Based in Cardiff, Wales.</p>' +
                  "<p>Twitter: <a href='https://twitter.com/plasmawrstags' target='_blank'>Visit</a></p>"
                  
        }),
        callbacks: {
            open: function() {
                $(this.getWrapper()).addClass('open');
            },
            afterOpen: function() {
                var wrapper = $(this.getWrapper());
                wrapper.addClass('active');
                wrapper.find('.custom-close').on('click', closePlasmawrStags);
            },
            beforeClose: function() {
                if (!closeDelayed) {
                    closePlasmawrStags();
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
    });

    // Scotland
    // Add a Snazzy Info Window to the Guerillas marker
    var guerillasInfoWindow = new SnazzyInfoWindow({
        marker: guerillasMarker,
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
            title: 'Guerillas Touch Rugby',
            // subtitle: 'Touch Rugby For All Abilities',
            bgImg: '/images/guerillas_banner.jpg',
            body: "<p>One of Scotland's largest & most successful touch clubs offering opportunities to play for players at all levels from complete beginner to internationals.</p>" +
                  "<p>Facebook: <a href='https://www.facebook.com/GuerillasTRC/' target='_blank'>Visit</a></p>" +
                  "<p>Twitter: <a href='https://twitter.com/guerilla_iain' target='_blank'>Visit</a></p>"
                  
        }),
        callbacks: {
            open: function() {
                $(this.getWrapper()).addClass('open');
            },
            afterOpen: function() {
                var wrapper = $(this.getWrapper());
                wrapper.addClass('active');
                wrapper.find('.custom-close').on('click', closeGuerillas);
            },
            beforeClose: function() {
                if (!closeDelayed) {
                    closeGuerillas();
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
    });

    // Add a Snazzy Info Window to the Stirlings marker
    var stirlingsInfoWindow = new SnazzyInfoWindow({
        marker: stirlingsMarker,
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
            title: 'Stirling Storm Touch Rugby',
            // subtitle: 'Touch Rugby For All Abilities',
            bgImg: '/images/stirlings_banner.jpg',
            body: "<p>We have been playing Touch in Stirling since the summer of 2001 and are always on the lookout for new players, both male and female, of all ages.</p>" +
                  "<p>It doesn’t matter whether you’ve played Touch before or what level of fitness you have, everybody is welcome. We offer structured training from our qualified coaches and referees. You’ll be made to feel at home and you’ll find that Touch is a really easy sport to learn.</p>" +
                  "<p>Our club works hard to ensure everyone is catered for, from those looking for a social run out through to those wanting to compete at top level in club tournaments and on to Regional and National representation.</p>" +
                  "<p>Facebook: <a href='https://www.facebook.com/stirlingstorm/' target='_blank'>Visit</a></p>" +
                  "<p>Twitter: <a href='https://twitter.com/stirlingtouch' target='_blank'>Visit</a></p>"
                  
        }),
        callbacks: {
            open: function() {
                $(this.getWrapper()).addClass('open');
            },
            afterOpen: function() {
                var wrapper = $(this.getWrapper());
                wrapper.addClass('active');
                wrapper.find('.custom-close').on('click', closeStirlings);
            },
            beforeClose: function() {
                if (!closeDelayed) {
                    closeStirlings();
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
    });

    // Add a Snazzy Info Window to the Galaxy Scotland marker
    var galaxyScotlandInfoWindow = new SnazzyInfoWindow({
        marker: galaxyScotlandMarker,
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
            title: 'Galaxy Scotland Touch Rugby',
            // subtitle: 'Touch Rugby For All Abilities',
            bgImg: '/images/galaxy_scotland_banner.jpg',
            body: "<p>Galaxy Scotland aims to promote free flowing, high pace touch based on the New Zealand style of from from where the club was born.</p>" +
                  "<p>The club plays in various leagues in Edinburgh, ranging from beginners to elite. It's primary focus is the Monday night Touch Superleague where is has a proud history of titles.</p>" +
                  "<p>It's a friendly and welcoming club, playing an exciting brand of Touch!</p>" +
                  "<p>Facebook: <a href='https://www.facebook.com/galaxyscotland/' target='_blank'>Visit</a></p>" +
                  "<p>Twitter: <a href='https://twitter.com/GalaxyEdinburgh' target='_blank'>Visit</a></p>" +
                  "<p>Website: <a href='http://www.galaxytouch.co.uk/' target='_blank'>Visit</a></p>"
                  
        }),
        callbacks: {
            open: function() {
                $(this.getWrapper()).addClass('open');
            },
            afterOpen: function() {
                var wrapper = $(this.getWrapper());
                wrapper.addClass('active');
                wrapper.find('.custom-close').on('click', closeGalaxyScotland);
            },
            beforeClose: function() {
                if (!closeDelayed) {
                    closeGalaxyScotland();
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
    });

    // Add a Snazzy Info Window to the Buffalos marker
    var buffalosInfoWindow = new SnazzyInfoWindow({
        marker: buffalosMarker,
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
            title: 'Buffalos Touch',
            // subtitle: 'Touch Rugby For All Abilities',
            bgImg: '/images/buffalos_banner.jpg',
            body: "<p>The Buffalos are a friendly club who enjoy a good game of touch as much as the social aspect of the sport.</p>" +
                  "<p>We play in elite, intermediate and social leagues and tournaments, catering for our players who range from internationals to beginners. If you fancy a run join the herd!</p>" +
                  "<p>Facebook: <a href='https://www.facebook.com/buffalostouchrugby/' target='_blank'>Visit</a></p>" +
                  "<p>Twitter: <a href='https://twitter.com/BuffalosTouch' target='_blank'>Visit</a></p>" +
                  "<p>Instagram: <a href='https://www.instagram.com/BuffalosTouch/'>Visit</a></p>"
        }),
        callbacks: {
            open: function() {
                $(this.getWrapper()).addClass('open');
            },
            afterOpen: function() {
                var wrapper = $(this.getWrapper());
                wrapper.addClass('active');
                wrapper.find('.custom-close').on('click', closeBuffalos);
            },
            beforeClose: function() {
                if (!closeDelayed) {
                    closeBuffalos();
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
    });

    // Add a Snazzy Info Window to the Six Pack marker
    var sixPackInfoWindow = new SnazzyInfoWindow({
        marker: sixPackMarker,
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
            title: 'Six Pack Touch',
            // subtitle: 'Touch Rugby For All Abilities',
            bgImg: '/images/six_pack_banner.jpg',
            body: "<p>Six Pack are an Edinburgh based Touch Rugby Club playing socially and competitively at local, regional and national levels.</p>" +
                  "<p>Players of all abilities are always welcome.</p>" +
                  "<p>Many of our members are playing their first season this year and several of our members represent Scotland across several grades.</p>" +
                  "<p>Facebook: <a href='https://www.facebook.com/Six-Pack-Touch-Rugby-Edinburgh-191653284196382/' target='_blank'>Visit</a></p>"
        }),
        callbacks: {
            open: function() {
                $(this.getWrapper()).addClass('open');
            },
            afterOpen: function() {
                var wrapper = $(this.getWrapper());
                wrapper.addClass('active');
                wrapper.find('.custom-close').on('click', closeSixPack);
            },
            beforeClose: function() {
                if (!closeDelayed) {
                    closeSixPack();
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
    });

    // Add a Snazzy Info Window to the Hoodlums marker
    var hoodlumsInfoWindow = new SnazzyInfoWindow({
        marker: hoodlumsMarker,
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
            title: 'Hoodlums Touch',
            // subtitle: 'Touch Rugby For All Abilities',
            bgImg: '/images/hoodlums_banner.jpg',
            body: "<p>Hoodlums is an Aberdeen-based touch rugby club. If you are interested in finding out more about touch or joining the club please send us a message.</p>" +
                  "<p>Facebook: <a href='https://www.facebook.com/HoodlumsTouch/' target='_blank'>Visit</a></p>" +
                  "<p>Twitter: <a href='https://twitter.com/hoodlumstouch' target='_blank'>Visit</a></p>"
        }),
        callbacks: {
            open: function() {
                $(this.getWrapper()).addClass('open');
            },
            afterOpen: function() {
                var wrapper = $(this.getWrapper());
                wrapper.addClass('active');
                wrapper.find('.custom-close').on('click', closeHoodlums);
            },
            beforeClose: function() {
                if (!closeDelayed) {
                    closeHoodlums();
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
    });

    // Add a Snazzy Info Window to the Leopards marker
    var leopardsInfoWindow = new SnazzyInfoWindow({
        marker: leopardsMarker,
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
            title: 'Leopards Touch',
            // subtitle: 'Touch Rugby For All Abilities',
            bgImg: '/images/leopards_banner.jpg',
            body: "<p>We are a mixed club and one of the leading Touch Rugby clubs in Aberdeen and Scotland.</p>" +
                  "<p>We are all inclusive and cater for all abilities from complete beginner through to expert.</p>" +
                  "<p>If you're interested in taking up Touch or would like to know more about the club, then please come along or contact the club for more details.</p>" +
                  "<p>Facebook: <a href='https://www.facebook.com/LeopardsTouch/' target='_blank'>Visit</a></p>"
        }),
        callbacks: {
            open: function() {
                $(this.getWrapper()).addClass('open');
            },
            afterOpen: function() {
                var wrapper = $(this.getWrapper());
                wrapper.addClass('active');
                wrapper.find('.custom-close').on('click', closeLeopards);
            },
            beforeClose: function() {
                if (!closeDelayed) {
                    closeLeopards();
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
    });

    // Add a Snazzy Info Window to the Glasgow Lions marker
    var glasgowLionsInfoWindow = new SnazzyInfoWindow({
        marker: glasgowLionsMarker,
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
            title: 'Glasgow Lions Touch',
            // subtitle: 'Touch Rugby For All Abilities',
            bgImg: '/images/glasgow_lions_banner.jpg',
            body: "<p>Glasgow Lions Touch Rugby Club. 'For all' ages and abilities. Come along and join us women and men of Glasgow!</p>" +
                  "<p>Facebook: <a href='https://www.facebook.com/GlasgowLionsTRC' target='_blank'>Visit</a></p>" +
                  "<p>Twitter: <a href='https://twitter.com/glasgowlions' target='_blank'>Visit</a></p>" +
                  "<p>Website: <a href='http://www.glasgowlions.com/' target='_blank'>Visit</a></p>"
        }),
        callbacks: {
            open: function() {
                $(this.getWrapper()).addClass('open');
            },
            afterOpen: function() {
                var wrapper = $(this.getWrapper());
                wrapper.addClass('active');
                wrapper.find('.custom-close').on('click', closeGlasgowLions);
            },
            beforeClose: function() {
                if (!closeDelayed) {
                    closeGlasgowLions();
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
    });

    // England
    // Add a Snazzy Info Window to the Northampton Coys marker
    var northamptonCoysInfoWindow = new SnazzyInfoWindow({
        marker: northamptonCoysMarker,
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
            title: 'Northampton Coys Touch Rugby',
            // subtitle: 'Touch Rugby For All Abilities',
            bgImg: '/images/northampton_coys_banner.jpg',
            body: "<p>Playing at CTS, DTS and social level, across the country.</p>" +
                  "<p>The biggest Touch club in the East Midlands, always looking for players of all abilities, from beginners to pros.</p>" +
                  "<p>Facebook: <a href='https://www.facebook.com/COYSTouchRugby/' target='_blank'>Visit</a></p>" +
                  "<p>Twitter: <a href='https://twitter.com/coystouchrugby' target='_blank'>Visit</a></p>"
                  
        }),
        callbacks: {
            open: function() {
                $(this.getWrapper()).addClass('open');
            },
            afterOpen: function() {
                var wrapper = $(this.getWrapper());
                wrapper.addClass('active');
                wrapper.find('.custom-close').on('click', closeNorthamptonCoys);
            },
            beforeClose: function() {
                if (!closeDelayed) {
                    closeNorthamptonCoys();
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
    });

    // Add a Snazzy Info Window to the Mawsley marker
    var mawsleyInfoWindow = new SnazzyInfoWindow({
        marker: mawsleyMarker,
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
            title: 'Mawsley Touch Rugby',
            // subtitle: 'Touch Rugby For All Abilities',
            bgImg: '/images/mawsley_banner.jpg',
            body: "<p>Mawsley Touch Rugby Club, formed in 2012, is a mixed, successful touch rugby club based in Northamptonshire. Our emphasis is on fun and fitness although we do play competitive games in the Summer months.</p>" +
                  "<p>We are always keen to hear from new players looking to join us, whatever your background or experience level. You DO NOT need any experience to join us.</p>" +
                  "<p>Facebook: <a href='https://www.facebook.com/groups/205733109557441/' target='_blank'>Visit</a></p>" +
                  "<p>Twitter: <a href='https://twitter.com/coystouchrugby' target='_blank'>Visit</a></p>" +
                  "<p>Website: <a href='http://www.mawsleyvillage.co.uk/mawsley-touch-rugby' target='_blank'>Visit</a></p>"
                  
        }),
        callbacks: {
            open: function() {
                $(this.getWrapper()).addClass('open');
            },
            afterOpen: function() {
                var wrapper = $(this.getWrapper());
                wrapper.addClass('active');
                wrapper.find('.custom-close').on('click', closeMawsley);
            },
            beforeClose: function() {
                if (!closeDelayed) {
                    closeMawsley();
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
    });

    // Add a Snazzy Info Window to the Chester Cheetahs marker
    var chesterCheetahsInfoWindow = new SnazzyInfoWindow({
        marker: chesterCheetahsMarker,
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
            title: 'Chester Cheetahs Touch Rugby',
            // subtitle: 'Touch Rugby For All Abilities',
            bgImg: '/images/chester_cheetahs_banner.jpg',
            body: "<p>Come and touch a live Cheetah every Thursday 18.00pm at Chester RUFC. A mixed sport for all ages, keeping fit and playing touch rugby. GOOOOOooooo Cheetahs</p>" +
                  "<p>Facebook: <a href='https://www.facebook.com/cheetahschester/' target='_blank'>Visit</a></p>" +
                  "<p>Twitter: <a href='https://twitter.com/Ches_Cheetahs' target='_blank'>Visit</a></p>" +
                  "<p>Website: <a href='http://www.pitchero.com/clubs/chesterrufc/teams/138311' target='_blank'>Visit</a></p>"
                  
        }),
        callbacks: {
            open: function() {
                $(this.getWrapper()).addClass('open');
            },
            afterOpen: function() {
                var wrapper = $(this.getWrapper());
                wrapper.addClass('active');
                wrapper.find('.custom-close').on('click', closeChesterCheetahs);
            },
            beforeClose: function() {
                if (!closeDelayed) {
                    closeChesterCheetahs();
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
    });



});