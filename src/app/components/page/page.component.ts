import { Component } from '@angular/core';
import {CdkDragDrop, CdkDragStart, CdkDragEnd, moveItemInArray, CdkDragEnter} from "@angular/cdk/drag-drop";
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrl: './page.component.css'
})
export class PageComponent {
  items = [
    "item1",
    "item2",
    "item3",
    "item4"
  ];
  clonedItem =null;
  droppedItems = [];
  myElements: SafeHtml[] = [];
  constructor(private sanitizer: DomSanitizer) {
    this.myElements = [
      this.sanitizer.bypassSecurityTrustHtml("<li class='list-group-item bg-info btn' >Abddeeell 1</li>"),
      this.sanitizer.bypassSecurityTrustHtml("<button  class='btn btn-primary'>Primary</button>"),
      this.sanitizer.bypassSecurityTrustHtml("<button  class='btn btn-primary'>Primary</button>"),
      this.sanitizer.bypassSecurityTrustHtml("<button  class='btn btn-primary'>Primary</button>"),
      this.sanitizer.bypassSecurityTrustHtml("<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n" +
        "  <div class=\"container-fluid\">\n" +
        "    <a class=\"navbar-brand\" href=\"#\">Navbar</a>\n" +
        "    <button class=\"navbar-toggler\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n" +
        "      <span class=\"navbar-toggler-icon\"></span>\n" +
        "    </button>\n" +
        "    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n" +
        "      <ul class=\"navbar-nav me-auto mb-2 mb-lg-0\">\n" +
        "        <li class=\"nav-item\">\n" +
        "          <a class=\"nav-link active\" aria-current=\"page\" href=\"#\">Home</a>\n" +
        "        </li>\n" +
        "        <li class=\"nav-item\">\n" +
        "          <a class=\"nav-link\" href=\"#\">Link</a>\n" +
        "        </li>\n" +
        "        <li class=\"nav-item dropdown\">\n" +
        "          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\n" +
        "            Dropdown\n" +
        "          </a>\n" +
        "          <ul class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n" +
        "            <li><a class=\"dropdown-item\" href=\"#\">Action</a></li>\n" +
        "            <li><a class=\"dropdown-item\" href=\"#\">Another action</a></li>\n" +
        "            <li><hr class=\"dropdown-divider\"></li>\n" +
        "            <li><a class=\"dropdown-item\" href=\"#\">Something else here</a></li>\n" +
        "          </ul>\n" +
        "        </li>\n" +
        "        <li class=\"nav-item\">\n" +
        "          <a class=\"nav-link disabled\" href=\"#\" tabindex=\"-1\" aria-disabled=\"true\">Disabled</a>\n" +
        "        </li>\n" +
        "      </ul>\n" +
        "      <form class=\"d-flex\">\n" +
        "        <input class=\"form-control me-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n" +
        "        <button class=\"btn btn-outline-success\" type=\"submit\">Search</button>\n" +
        "      </form>\n" +
        "    </div>\n" +
        "  </div>\n" +
        "</nav>")
    ];
  }
  //startedDrag
  onStartedDrag(event: CdkDragStart<string[]>) {
    // @ts-ignore
    this.clonedItem = event.source.data ;
    console.log('startedDrag', event.source);


  }

  drop(event: CdkDragDrop<string[]>) {
    if (!event.isPointerOverContainer) {
      console.log(this.clonedItem);
      // @ts-ignore
      this.droppedItems.push(this.clonedItem);
      this.clonedItem = null;
    } else {
      moveItemInArray(this.myElements, event.previousIndex, event.currentIndex);
    }

  }
}
