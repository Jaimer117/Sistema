import { Component, OnInit, ViewChild} from '@angular/core';
import { EditSettingsModel, ToolbarItem } from '@syncfusion/ej2-angular-gantt';
import {   projectData } from 'src/app/interfaces/dataDiagrama.interface';
import { FieldSettingsModel } from '@syncfusion/ej2-angular-navigations';
import { CheckBoxComponent } from '@syncfusion/ej2-angular-buttons';
import { DropDownTreeComponent } from '@syncfusion/ej2-angular-dropdowns';



@Component({
  selector: 'app-diagrama',
  templateUrl: './diagrama.component.html',
  styleUrls: ['./diagrama.component.css'],

   
})

export class DiagramaComponent implements OnInit {
    @ViewChild('defaultCheck')
    public ddTreeObj!: DropDownTreeComponent;
    @ViewChild('check')
    public checkboxObj!: CheckBoxComponent;
    public dat: object[]=projectData;
    public columns!: object[];
    public taskSettings!: object;
    public editSettings!: EditSettingsModel;
    public toolbar: ToolbarItem[] = [];
  
 
    public ngOnInit(): void {
        this.taskSettings = {
            id: 'TaskID',
            name: 'Nivel1',
            startDate: 'FechaInicio',
            endDate: 'FechaFin',
            duration: 'Duracion',
            progress: 'Progreso',
            child: 'subtasks',
            
            
        };

        this.columns =  [
            { field: 'TaskID'},
            { field: 'Nivel1', headerText: 'Nivel 1' },
            { field: 'Nivel2', headerText: 'Nivel 2'  },
            { field: 'Nivel3', headerText: '', width: '250', clipMode: 'EllipsisWithTooltip' },
            { field: 'FechaInicio',headerText: 'Fecha Inicio' },
            { field: 'FechaFin', headerText: 'Fecha Fin'},
            { field: 'Duracion', headerText: 'Duracion'},
            { field: 'Progreso', headerText: 'Progreso'},
        ];
    
        this.editSettings = {
            allowAdding:true,
            allowEditing: true,
            allowDeleting: true,
            allowTaskbarEditing: true,
            showDeleteConfirmDialog: true,
        
            };
          
            this.toolbar = ['Add','Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll' ];
    
    };

 public countries: Object[] = [
                { id: 11, name: 'Personal ', hasChild: true, expanded: true },
                { id: 12, pid: 11, name: 'Pintor' },
                { id: 13, pid: 11, name: 'soldador' },
                { id: 14, pid: 11, name: 'sellador' },
                { id: 17, name: 'Material', hasChild: true },
                { id: 18, pid: 17, name: 'Pintura' },
                { id: 19, pid: 17, name: 'metal' },

            ]

            public field: Object = { dataSource: this.countries, value: 'id', parentValue: 'pid', text: 'name', hasChildren: 'hasChild' };
            public showCheckBox = true;
            public mode = 'Delimiter';
        
            public onChange(): void {
                this.ddTreeObj.treeSettings.autoCheck = this.checkboxObj.checked;
            }
           
}
        
    