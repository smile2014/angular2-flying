/**
 * Created by laixiangran on 2016/8/15.
 * homepage：http://www.laixiangran.cn.
 */

import {Directive, ElementRef, OnInit, Input, Output, EventEmitter, OnDestroy} from "@angular/core";

@Directive({
    selector: "[essence-ng2-fileInput]"
})
export class EssenceNg2FileInputDirective implements OnInit, OnDestroy {
    el: HTMLElement;
    $el: JQuery;
    defaultOpts: any = {
        language: "zh",
        previewFileType: "any"
    };

    @Input('essence-ng2-fileInput') fileInputOpts: any;

    @Output()
    ready: EventEmitter<any> = new EventEmitter<any>(false);

    @Output()
    fileuploaded: EventEmitter<any> = new EventEmitter<any>(false);

    @Output()
    fileuploaderror: EventEmitter<any> = new EventEmitter<any>(false);

    @Output()
    filebatchuploadcomplete: EventEmitter<any> = new EventEmitter<any>(false);

    @Output()
    filebatchuploaderror: EventEmitter<any> = new EventEmitter<any>(false);

    constructor (el: ElementRef) {
        this.el = el.nativeElement;
        this.$el = $(this.el);
    }

    ngOnInit () {
        this.$el.fileinput($.extend({}, this.defaultOpts, this.fileInputOpts));

        this.ready.emit(this.$el);

        this.$el.on('fileuploaded', (event: any, data: any, previewId: any, index: any) => {
            this.fileuploaded.emit({
                event: event,
                data: data,
                previewId: previewId,
                index: index
            });
        });

        this.$el.on('fileuploaderror', (event: any, data: any, msg: any) => {
            this.fileuploaderror.emit({
                event: event,
                data: data,
                msg: msg
            });
        });

        this.$el.on('filebatchuploadcomplete', (event: any, data: any, previewId: any, index: any) => {
            this.filebatchuploadcomplete.emit({
                event: event,
                data: data,
                previewId: previewId,
                index: index
            });
        });

        this.$el.on('filebatchuploaderror', (event: any, data: any, msg: any) => {
            this.filebatchuploaderror.emit({
                event: event,
                data: data,
                msg: msg
            });
        });
    }

    ngOnDestroy () {
        this.$el.fileinput('destroy');
    }
}