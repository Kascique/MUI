//=include _base.js

function drawer() {
    var _drawer = $get(".drawer"),
      _doc = $get("body");
    if (_drawer.className.includes("active")) {
      _drawer.style.left = 0 + "px";
      _doc.style.marginLeft = _drawer.offsetWidth + "px";
    }
    if (_drawer.className.includes("permanent")) {
      $addClass(_drawer, "notrans");
      $addClass(_doc, "notrans");
      _drawer.style.left = 0 + "px";
      _doc.style.marginLeft = _drawer.offsetWidth + "px";
      return;
    } else {
      call("[drawer]", "click", function() {
        var _navType = this.getAttribute("drawer");
        var clickTimes = 0;
        var _drawer = $get(".drawer"),
          _doc = $get("body");

        if (_drawer.style.left != 0 + "px") {
          if (_navType == "overlay") {
            _drawer.style.left = 0 + "px";
            $addClass(_doc, "overlay");
            $addClass(_doc, "fadeIn");
            document.addEventListener("click", clickOutSide, true);
          } else if (_navType == "push") {
            _drawer.style.left = 0 + "px";
            _doc.style.marginLeft = _drawer.offsetWidth + "px";
          }
        } else {
          close();
        }

        function clickOutSide() {
          clickTimes++;
          close();
        }

        function close() {
          _drawer.style.left = "-" + 100 + "%";
          $addClass(_doc, "fadeOut");
          $removeClass(_doc, "fadeIn");
          $removeClass(_doc, "fadeOut");
          $removeClass(_doc, "overlay");
          _doc.style.marginLeft = 0 + "px";
          document.removeEventListener("click", clickOutSide, true);
          return;
        }
      });
      call("[drop]", "click", function() {
        var target = this.getAttribute("drop");
        var targetID = $get("#"+target);
        var nav = $get("#"+target+"> nav").offsetHeight;
        var cur_h = targetID.style.height;

        if(targetID.className.includes("active")){
          targetID.style.height =  0;
          $removeClass(targetID, 'active');
        }else{
          targetID.style.height = nav+'px'; 
          $addClass(targetID, 'active');
        } 
      });
    }
  };
