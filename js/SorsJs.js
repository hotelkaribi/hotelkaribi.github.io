
/* SorsJs 2.8.3  */
;

window.SorsJs = (function (window, document, undefined) {

    var version = '1.0.0.0',

    SorsJs = {},

    progressValue = 0,
    docElement = document.documentElement,

    mod = 'modernizr',
    modElem = document.createElement(mod),
    mStyle = modElem.style,

    inputElem,

	// apiKey1 = "72df18b7f213607b",
	apiKey2 = "6f65097568924354",
	apiKey3 = "deffa85bd0bf64af",
	apiKey4 = "c3bf18d1972e950c",

    toString = {}.toString, tests = {},
    inputs = {},
    attrs = {},

    classes = [],

    slice = classes.slice,

    featureName,

    callerFunc = {},
    classesProtoArr = [],

    _hasOwnProperty = ({}).hasOwnProperty, hasOwnProp;

    if (!is(_hasOwnProperty, 'undefined') && !is(_hasOwnProperty.call, 'undefined')) {
        hasOwnProp = function (object, property) {
            return _hasOwnProperty.call(object, property);
        };
    }
    else {
        hasOwnProp = function (object, property) {
            return ((property in object) && is(object.constructor.prototype[property], 'undefined'));
        };
    }


    if (!Function.prototype.bind) {
        Function.prototype.bind = function bind(that) {

            var target = this;

            if (typeof target != "function") {
                throw new TypeError();
            }

            var args = slice.call(arguments, 1),
                bound = function () {

                    if (this instanceof bound) {

                        var F = function () { };
                        F.prototype = target.prototype;
                        var self = new F();

                        var result = target.apply(
                            self,
                            args.concat(slice.call(arguments))
                        );
                        if (Object(result) === result) {
                            return result;
                        }
                        return self;

                    } else {

                        return target.apply(
                            that,
                            args.concat(slice.call(arguments))
                        );

                    }

                };

            return bound;
        };
    }

    function setCss(str) {
        mStyle.cssText = str;
    }

    function setCssAll(str1, str2) {
        return setCss(prefixes.join(str1 + ';') + (str2 || ''));
    }

    function is(obj, type) {
        return typeof obj === type;
    }

    function contains(str, substr) {
        return !!~('' + str).indexOf(substr);
    }

    

    function testDOMProps(props, obj, elem) {
        for (var i in props) {
            var item = obj[props[i]];
            if (item !== undefined) {

                if (elem === false) return props[i];

                if (is(item, 'function')) {
                    return item.bind(elem || obj);
                }

                return item;
            }
        }
        return false;
    }
    for (var feature in tests) {
        if (hasOwnProp(tests, feature)) {
            featureName = feature.toLowerCase();
            SorsJs[featureName] = tests[feature]();

            classes.push((SorsJs[featureName] ? '' : 'no-') + featureName);
        }
    }



    SorsJs.addTest = function (feature, test) {
        if (typeof feature == 'object') {
            for (var key in feature) {
                if (hasOwnProp(feature, key)) {
                    SorsJs.addTest(key, feature[key]);
                }
            }
        } else {

            feature = feature.toLowerCase();

            if (SorsJs[feature] !== undefined) {
                return SorsJs;
            }

            test = typeof test == 'function' ? test() : test;

            if (typeof enableClasses !== "undefined" && enableClasses) {
                docElement.className += ' ' + (test ? '' : 'no-') + feature;
            }
            SorsJs[feature] = test;

        }

        return SorsJs;
    };

    setCss('');
    modElem = inputElem = null;
    
    SorsJs._version = version;

    
    SorsJs['isInit'] = function ()
    {
        window.onload = function () {
            $('.loadingSplash').animate({ 'opacity': 0 }, 200, function ()
            {
                setProgress(100);
                // hideProgress();
                $('.loadingSplash').remove();               
            });
            
            $('.mapLoader30').ready(function () {
                var i = +getProgressValue() + +10;
                setProgress(i);                
            });

            $('.mapLoader40').ready( function () {
                var i = +getProgressValue() + +10;
                setProgress(i);                
            });

            $('.mapLoader60').ready(function () {
                var i = +getProgressValue() + +10;
                setProgress(i);                
            });
            
            $('.mapLoader80').ready( function () {
                var i = +getProgressValue() + +10;
                setProgress(i);                               
            });

            $('.mapLoader100').ready(function () {
                setProgress(100);
                // hideProgress();             
            });
                                   
        };

        $(window).init(function () {
            var i = 10;
            setProgress(i);
          
        });

        $(document).ready(function () {
            var i = 20;
            setProgress(i);           
        });
        
        return true;
    };

    function hideProgress()
    {
        var i = 0;
        $('.progress').css('height', +i + '%');
    }
    
    function setProgress(i)
    {
        $('.progress-bar').css('width', i + '%').attr('aria-valuenow', i);
    }

    function getProgressValue() {
        var value = document.getElementById('progressBarSplash').getAttribute('aria-valuenow');
        return value;
    }

    function setAngle(degree)
    {        
        $("#divForcast").animate(
            { rotation: degree },
            {
                duration: 500,
                step: function (now, fx) {
                    $(this).css({ "transform": "rotate(" + now + "deg)" });
                }
            }
        );
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function startBackgroundRefreshAngle()
    {
        

        setInterval(function ()
        {
        
			        
            $.getJSON("http://api.wunderground.com/api/"+ apiKey4 +"/conditions/forecast/geolookup/q/42.63978,27.67529.json", function (result) {


                var windDirection = result['current_observation']['wind_degrees'];

                // windDirection = getRandomInt(0, 360);

                setAngle(windDirection);
                $('#windValue').text(windDirection + '°');

            })
            .done(function() {				
				console.log( "second success setInterval" );
			})
			.fail(function(jqXHR, textStatus, errorThrown) {
				 
				console.log( "error setInterval message: " + errorThrown );
			})
			.always(function() {
				console.log( "complete setInterval" );
			});

           
        }, 10000);
        setAngle(0);

       

    }

    String.format = function () {
        var s = arguments[0];
        for (var i = 0; i < arguments.length - 1; i++) {
            var reg = new RegExp("\\{" + i + "\\}", "gm");
            s = s.replace(reg, arguments[i + 1]);
        }
        return s;
    }


    SorsJs['forecast'] = function forecast() {
        $(document).ready(function () {

			
            $.getJSON("http://api.wunderground.com/api/"+ apiKey3 +"/conditions/forecast/geolookup/q/42.63978,27.67529.json", function (result) {
				console.log( "success forecast" );

                var dynamicText = '<div class="container" style="background-color:lightgrey;  ">';
                dynamicText += '  <label class="bg-primary small">Ravda Weather</label>      ';
                dynamicText += '  <img src="{3}" class="img-circle" alt="Ravda Weather" >    '; // width="50" height="50"
                dynamicText += '  <label class="bg-primary small"> {0} </label> ';
                dynamicText += '  <label class="bg-primary small"> {1} </label> ';
                dynamicText += '  <label class="bg-primary small"> Temperature: {2} °C </label>';

                dynamicText += ' <label ID="windDirection" key="windDirection" class="tr bg-primary small">Wind direction</label>';
                dynamicText += ' <div id="divForcast" class="img-circle" style="width: 50px; height: 50px; background-image: url(\'img/arrowUp.png\')">';
                dynamicText += '     <label ID="windValue" key="windValue" class="tr small text-center text-primary" style="margin: 0px 16px ;">360°</label>';
                dynamicText += ' </div>';

                dynamicText += '</div> ';

                var location = result['location']['city'];
                var temp_f = result['current_observation']['temp_f'];
                var temp_c = result['current_observation']['temp_c'];
                var imageUrl = result['current_observation']['icon_url'];
                var windDirection = result['current_observation']['wind_degrees'];

                var whetherDescriptionList1 = result['forecast']['txt_forecast']['forecastday'];
                var whetherDescriptionList2 = result['forecast']['txt_forecast']['forecastday'];

                var whetherDescription1 = "";
                whetherDescriptionList1.forEach(function (item) {
                    whetherDescription1 = item['fcttext'];
                    return false;
                });

                var whetherDescription2 = "";
                whetherDescriptionList2.forEach(function (item) {
                    whetherDescription2 = item['fcttext_metric'];
                    return false;
                });

                var innerText = String.format(dynamicText, whetherDescription1, whetherDescription2, temp_c, imageUrl);

                //$("#divWhether").innerHTML = innerText;
                $("#divWhether").append(innerText);

                // startBackgroundRefreshAngle(0);
                            
                setAngle(windDirection);
                $('#windValue').text(windDirection + '°');

            })
            .done(function() {				
				console.log( "second success forecast" );
			})
			.fail(function(jqXHR, textStatus, errorThrown) {
				 
				console.log( "error forecast message: " + errorThrown );
			})
			.always(function() {
				console.log( "complete forecast" );
			});

        });

    }

    SorsJs['afterLoad'] = function ()
    {

      
        $(window).load(function ()
        {
            hideProgress();
        });


        return true;
    };

    SorsJs['afterShow'] = function afterShow() {
        $(document).ready(function () {            
            
            setProgress(100);

            //$('body').css('display', 'none');
            //$("body").fadeIn("slow");
                    
        });
        
    }

    return SorsJs;

})(this, this.document);
;



!function ($) {

    "use strict";

    // PROGRESSBAR CLASS DEFINITION
    // ============================

    var Progressbar = function (element) {
        this.$element = $(element);
    }

    // PROGRESSBAR PLUGIN DEFINITION
    // =============================

    $.fn.progressbar = function (option) {
        return this.each(function() {
            var $this = $(this), data = $this.data('jbl.progressbar');
            if (!data)
                $this.data('jbl.progressbar', (data = new Progressbar(this)));
        });
    };

}(window.jQuery);