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
        zoom: 8,
        //styles: mapStyle,
        center: new google.maps.LatLng(52.4016798, -5.2837261)
    });

    // *********************
    // Markers
    // *********************
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
            body: "<p>Cardiff based Touch team. We have a Men's, Women's & Mixed team who compete in leagues & tournaments in and around South Wales. New players always welcome!.</p>" +
                  "<p>Website: <a href='http://www.pitchero.com/clubs/cardiffraptorstouch' target='_blank'>Visit</a></p>" +
                  "<p>Facebook: <a href='https://www.facebook.com/CardiffRaptorsTouch/' target='_blank'>Visit</p>"
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
});