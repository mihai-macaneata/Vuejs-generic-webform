import {getField} from './form-builder.js'

var form  = {
	tabs: {
		tab_1: {
			title: 'test tab title',
			description: 'test tab description',
			// used for identification when adding labels
			name: 'tab_name_1',
			form_sections: [
				{
					title: 'test form section 1 title',
					description: "test form section 1 description",
					name: 'form_section_1',
					form_fields: [
						{
							title: "form_field_1 title",
							label: "form_field_1 label",
							name: "form_field_1_name",
							type: "text",
							selected: '',
							constraints: {}
						},
						{
							title: "form_field_2 title",
							label: "form_field_2 label",
							name: "form_field_2_name",
							type: "number",
							selected: '',
							constraints: {}
						},
						{
							title: "form_field_3 title",
							label: "form_field_3 label",
							name: "form_field_3_name",
							type: "textarea",
							selected: '',
							constraints: {}
						},

						{
							title: "form_field_3 title",
							label: "form_field_3 label",
							name: "form_field_3_name",
							type: "checkbox",
							selected: '',
							options: [{value:1, text:'a'}, {value: 2, text:'b'}],
							constraints: {}
						},
						
						{
							title: "form_field_4 title",
							label: "form_field_4 label",
							name: "form_field_4_name",
							type: "select",
							selected: '',
							options: [{value:1, text:'a'}, {value: 2, text:'b'}],
							constraints: {}
						},

					]
				},
				{
					title: 'test form section 2 title',
					description: "test form section 2 description",
					name: 'form_section_2',
					form_fields: [
						{test: getField()}
					]
				},
			]
		},
		tab_2: {

		},
	},
}
export default form