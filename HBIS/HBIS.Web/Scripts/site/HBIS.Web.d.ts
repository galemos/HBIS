﻿/// <reference types="jquery" />
/// <reference types="jqueryui" />
declare namespace HBIS.ADD {
    class ExameDescicaoForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ExameDescicaoForm {
        Descricao: Serenity.StringEditor;
    }
}
declare namespace HBIS.ADD {
    interface ExameDescicaoRow {
        IdExameDescricao?: number;
        Descricao?: string;
    }
    namespace ExameDescicaoRow {
        const idProperty = "IdExameDescricao";
        const nameProperty = "Descricao";
        const localTextPrefix = "ADD.ExameDescicao";
        namespace Fields {
            const IdExameDescricao: any;
            const Descricao: any;
        }
    }
}
declare namespace HBIS.ADD {
    namespace ExameDescicaoService {
        const baseUrl = "ADD/ExameDescicao";
        function Create(request: Serenity.SaveRequest<ExameDescicaoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ExameDescicaoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ExameDescicaoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ExameDescicaoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace HBIS.ADD {
    class ExameForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ExameForm {
        IdPaciente: Serenity.IntegerEditor;
        Crm: Serenity.StringEditor;
        IdExameDescricao: Serenity.IntegerEditor;
        Resultado: Serenity.DecimalEditor;
    }
}
declare namespace HBIS.ADD {
    interface ExameRow {
        IdExame?: number;
        IdPaciente?: number;
        Crm?: string;
        IdExameDescricao?: number;
        Resultado?: number;
        IdPacienteIdSexo?: number;
        IdPacienteIdTipoSanguineo?: number;
        IdPacienteAltura?: number;
        IdPacienteContatoEmergencia?: string;
        IdPacienteDataNascimento?: string;
        IdPacienteEmail?: string;
        IdPacienteFatorCorrecao?: number;
        IdPacienteGlicemiaIdeal?: number;
        IdPacienteInsulinaBasal?: number;
        IdPacienteInsulinaRapida?: number;
        IdPacienteNome?: string;
        IdPacientePeso?: number;
        CrmCpf?: string;
        CrmNome?: string;
        CrmEmail?: string;
        IdExameDescricaoDescricao?: string;
    }
    namespace ExameRow {
        const idProperty = "IdExame";
        const nameProperty = "Crm";
        const localTextPrefix = "ADD.Exame";
        namespace Fields {
            const IdExame: any;
            const IdPaciente: any;
            const Crm: any;
            const IdExameDescricao: any;
            const Resultado: any;
            const IdPacienteIdSexo: any;
            const IdPacienteIdTipoSanguineo: any;
            const IdPacienteAltura: any;
            const IdPacienteContatoEmergencia: any;
            const IdPacienteDataNascimento: any;
            const IdPacienteEmail: any;
            const IdPacienteFatorCorrecao: any;
            const IdPacienteGlicemiaIdeal: any;
            const IdPacienteInsulinaBasal: any;
            const IdPacienteInsulinaRapida: any;
            const IdPacienteNome: any;
            const IdPacientePeso: any;
            const CrmCpf: any;
            const CrmNome: any;
            const CrmEmail: any;
            const IdExameDescricaoDescricao: any;
        }
    }
}
declare namespace HBIS.ADD {
    namespace ExameService {
        const baseUrl = "ADD/Exame";
        function Create(request: Serenity.SaveRequest<ExameRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ExameRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ExameRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ExameRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace HBIS.ADD {
    class HistoricoForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface HistoricoForm {
        IdPaciente: Serenity.IntegerEditor;
        Carboidrato: Serenity.DecimalEditor;
        Data: Serenity.DateEditor;
        GlicemiaAtual: Serenity.DecimalEditor;
        Insulina: Serenity.DecimalEditor;
    }
}
declare namespace HBIS.ADD {
    interface HistoricoRow {
        IdHistorico?: number;
        IdPaciente?: number;
        Carboidrato?: number;
        Data?: string;
        GlicemiaAtual?: number;
        Insulina?: number;
        IdPacienteIdSexo?: number;
        IdPacienteIdTipoSanguineo?: number;
        IdPacienteAltura?: number;
        IdPacienteContatoEmergencia?: string;
        IdPacienteDataNascimento?: string;
        IdPacienteEmail?: string;
        IdPacienteFatorCorrecao?: number;
        IdPacienteGlicemiaIdeal?: number;
        IdPacienteInsulinaBasal?: number;
        IdPacienteInsulinaRapida?: number;
        IdPacienteNome?: string;
        IdPacientePeso?: number;
    }
    namespace HistoricoRow {
        const idProperty = "IdHistorico";
        const localTextPrefix = "ADD.Historico";
        namespace Fields {
            const IdHistorico: any;
            const IdPaciente: any;
            const Carboidrato: any;
            const Data: any;
            const GlicemiaAtual: any;
            const Insulina: any;
            const IdPacienteIdSexo: any;
            const IdPacienteIdTipoSanguineo: any;
            const IdPacienteAltura: any;
            const IdPacienteContatoEmergencia: any;
            const IdPacienteDataNascimento: any;
            const IdPacienteEmail: any;
            const IdPacienteFatorCorrecao: any;
            const IdPacienteGlicemiaIdeal: any;
            const IdPacienteInsulinaBasal: any;
            const IdPacienteInsulinaRapida: any;
            const IdPacienteNome: any;
            const IdPacientePeso: any;
        }
    }
}
declare namespace HBIS.ADD {
    namespace HistoricoService {
        const baseUrl = "ADD/Historico";
        function Create(request: Serenity.SaveRequest<HistoricoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<HistoricoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<HistoricoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<HistoricoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace HBIS.ADD {
    class MedicoForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface MedicoForm {
        Cpf: Serenity.StringEditor;
        Nome: Serenity.StringEditor;
        Email: Serenity.StringEditor;
    }
}
declare namespace HBIS.ADD {
    interface MedicoRow {
        Crm?: string;
        Cpf?: string;
        Nome?: string;
        Email?: string;
    }
    namespace MedicoRow {
        const idProperty = "Crm";
        const nameProperty = "Crm";
        const localTextPrefix = "ADD.Medico";
        namespace Fields {
            const Crm: any;
            const Cpf: any;
            const Nome: any;
            const Email: any;
        }
    }
}
declare namespace HBIS.ADD {
    namespace MedicoService {
        const baseUrl = "ADD/Medico";
        function Create(request: Serenity.SaveRequest<MedicoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MedicoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MedicoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MedicoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace HBIS.ADD {
    class PacienteForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface PacienteForm {
        IdSexo: Serenity.IntegerEditor;
        IdTipoSanguineo: Serenity.IntegerEditor;
        Altura: Serenity.DecimalEditor;
        ContatoEmergencia: Serenity.StringEditor;
        DataNascimento: Serenity.DateEditor;
        Email: Serenity.StringEditor;
        FatorCorrecao: Serenity.DecimalEditor;
        GlicemiaIdeal: Serenity.DecimalEditor;
        InsulinaBasal: Serenity.DecimalEditor;
        InsulinaRapida: Serenity.DecimalEditor;
        Nome: Serenity.StringEditor;
        Peso: Serenity.DecimalEditor;
    }
}
declare namespace HBIS.ADD {
    interface PacienteRow {
        IdPaciente?: number;
        IdSexo?: number;
        IdTipoSanguineo?: number;
        Altura?: number;
        ContatoEmergencia?: string;
        DataNascimento?: string;
        Email?: string;
        FatorCorrecao?: number;
        GlicemiaIdeal?: number;
        InsulinaBasal?: number;
        InsulinaRapida?: number;
        Nome?: string;
        Peso?: number;
        IdSexoDescricao?: string;
        IdTipoSanguineoDescricao?: string;
    }
    namespace PacienteRow {
        const idProperty = "IdPaciente";
        const nameProperty = "ContatoEmergencia";
        const localTextPrefix = "ADD.Paciente";
        namespace Fields {
            const IdPaciente: any;
            const IdSexo: any;
            const IdTipoSanguineo: any;
            const Altura: any;
            const ContatoEmergencia: any;
            const DataNascimento: any;
            const Email: any;
            const FatorCorrecao: any;
            const GlicemiaIdeal: any;
            const InsulinaBasal: any;
            const InsulinaRapida: any;
            const Nome: any;
            const Peso: any;
            const IdSexoDescricao: any;
            const IdTipoSanguineoDescricao: any;
        }
    }
}
declare namespace HBIS.ADD {
    namespace PacienteService {
        const baseUrl = "ADD/Paciente";
        function Create(request: Serenity.SaveRequest<PacienteRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PacienteRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PacienteRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PacienteRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace HBIS.ADD {
    class SexoForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface SexoForm {
        Descricao: Serenity.StringEditor;
    }
}
declare namespace HBIS.ADD {
    interface SexoRow {
        IdSexo?: number;
        Descricao?: string;
    }
    namespace SexoRow {
        const idProperty = "IdSexo";
        const nameProperty = "Descricao";
        const localTextPrefix = "ADD.Sexo";
        namespace Fields {
            const IdSexo: any;
            const Descricao: any;
        }
    }
}
declare namespace HBIS.ADD {
    namespace SexoService {
        const baseUrl = "ADD/Sexo";
        function Create(request: Serenity.SaveRequest<SexoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SexoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SexoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SexoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace HBIS.ADD {
    class TipoSanguineoForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface TipoSanguineoForm {
        Descricao: Serenity.StringEditor;
    }
}
declare namespace HBIS.ADD {
    interface TipoSanguineoRow {
        IdTipoSanguineo?: number;
        Descricao?: string;
    }
    namespace TipoSanguineoRow {
        const idProperty = "IdTipoSanguineo";
        const nameProperty = "Descricao";
        const localTextPrefix = "ADD.TipoSanguineo";
        namespace Fields {
            const IdTipoSanguineo: any;
            const Descricao: any;
        }
    }
}
declare namespace HBIS.ADD {
    namespace TipoSanguineoService {
        const baseUrl = "ADD/TipoSanguineo";
        function Create(request: Serenity.SaveRequest<TipoSanguineoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TipoSanguineoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TipoSanguineoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TipoSanguineoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace HBIS.Administration {
}
declare namespace HBIS.Administration {
    interface LanguageForm {
        LanguageId: Serenity.StringEditor;
        LanguageName: Serenity.StringEditor;
    }
    class LanguageForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace HBIS.Administration {
    interface LanguageRow {
        Id?: number;
        LanguageId?: string;
        LanguageName?: string;
    }
    namespace LanguageRow {
        const idProperty = "Id";
        const nameProperty = "LanguageName";
        const localTextPrefix = "Administration.Language";
        const lookupKey = "Administration.Language";
        function getLookup(): Q.Lookup<LanguageRow>;
        const enum Fields {
            Id = "Id",
            LanguageId = "LanguageId",
            LanguageName = "LanguageName"
        }
    }
}
declare namespace HBIS.Administration {
    namespace LanguageService {
        const baseUrl = "Administration/Language";
        function Create(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Language/Create",
            Update = "Administration/Language/Update",
            Delete = "Administration/Language/Delete",
            Retrieve = "Administration/Language/Retrieve",
            List = "Administration/Language/List"
        }
    }
}
declare namespace HBIS.Administration {
}
declare namespace HBIS.Administration {
    interface RoleForm {
        RoleName: Serenity.StringEditor;
    }
    class RoleForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace HBIS.Administration {
    interface RolePermissionListRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace HBIS.Administration {
    interface RolePermissionListResponse extends Serenity.ListResponse<string> {
    }
}
declare namespace HBIS.Administration {
    interface RolePermissionRow {
        RolePermissionId?: number;
        RoleId?: number;
        PermissionKey?: string;
        RoleRoleName?: string;
    }
    namespace RolePermissionRow {
        const idProperty = "RolePermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.RolePermission";
        const enum Fields {
            RolePermissionId = "RolePermissionId",
            RoleId = "RoleId",
            PermissionKey = "PermissionKey",
            RoleRoleName = "RoleRoleName"
        }
    }
}
declare namespace HBIS.Administration {
    namespace RolePermissionService {
        const baseUrl = "Administration/RolePermission";
        function Update(request: RolePermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: RolePermissionListRequest, onSuccess?: (response: RolePermissionListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/RolePermission/Update",
            List = "Administration/RolePermission/List"
        }
    }
}
declare namespace HBIS.Administration {
    interface RolePermissionUpdateRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: string[];
    }
}
declare namespace HBIS.Administration {
    interface RoleRow {
        RoleId?: number;
        RoleName?: string;
    }
    namespace RoleRow {
        const idProperty = "RoleId";
        const nameProperty = "RoleName";
        const localTextPrefix = "Administration.Role";
        const lookupKey = "Administration.Role";
        function getLookup(): Q.Lookup<RoleRow>;
        const enum Fields {
            RoleId = "RoleId",
            RoleName = "RoleName"
        }
    }
}
declare namespace HBIS.Administration {
    namespace RoleService {
        const baseUrl = "Administration/Role";
        function Create(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Role/Create",
            Update = "Administration/Role/Update",
            Delete = "Administration/Role/Delete",
            Retrieve = "Administration/Role/Retrieve",
            List = "Administration/Role/List"
        }
    }
}
declare namespace HBIS.Administration {
    interface TranslationItem {
        Key?: string;
        SourceText?: string;
        TargetText?: string;
        CustomText?: string;
    }
}
declare namespace HBIS.Administration {
    interface TranslationListRequest extends Serenity.ListRequest {
        SourceLanguageID?: string;
        TargetLanguageID?: string;
    }
}
declare namespace HBIS.Administration {
    namespace TranslationService {
        const baseUrl = "Administration/Translation";
        function List(request: TranslationListRequest, onSuccess?: (response: Serenity.ListResponse<TranslationItem>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: TranslationUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            List = "Administration/Translation/List",
            Update = "Administration/Translation/Update"
        }
    }
}
declare namespace HBIS.Administration {
    interface TranslationUpdateRequest extends Serenity.ServiceRequest {
        TargetLanguageID?: string;
        Translations?: {
            [key: string]: string;
        };
    }
}
declare namespace HBIS.Administration {
}
declare namespace HBIS.Administration {
    interface UserForm {
        Username: Serenity.StringEditor;
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        UserImage: Serenity.ImageUploadEditor;
        Password: Serenity.PasswordEditor;
        PasswordConfirm: Serenity.PasswordEditor;
        Source: Serenity.StringEditor;
    }
    class UserForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace HBIS.Administration {
    interface UserPermissionListRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace HBIS.Administration {
    interface UserPermissionRow {
        UserPermissionId?: number;
        UserId?: number;
        PermissionKey?: string;
        Granted?: boolean;
        Username?: string;
        User?: string;
    }
    namespace UserPermissionRow {
        const idProperty = "UserPermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.UserPermission";
        const enum Fields {
            UserPermissionId = "UserPermissionId",
            UserId = "UserId",
            PermissionKey = "PermissionKey",
            Granted = "Granted",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace HBIS.Administration {
    namespace UserPermissionService {
        const baseUrl = "Administration/UserPermission";
        function Update(request: UserPermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<UserPermissionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListRolePermissions(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListPermissionKeys(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserPermission/Update",
            List = "Administration/UserPermission/List",
            ListRolePermissions = "Administration/UserPermission/ListRolePermissions",
            ListPermissionKeys = "Administration/UserPermission/ListPermissionKeys"
        }
    }
}
declare namespace HBIS.Administration {
    interface UserPermissionUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: UserPermissionRow[];
    }
}
declare namespace HBIS.Administration {
    interface UserRoleListRequest extends Serenity.ServiceRequest {
        UserID?: number;
    }
}
declare namespace HBIS.Administration {
    interface UserRoleListResponse extends Serenity.ListResponse<number> {
    }
}
declare namespace HBIS.Administration {
    interface UserRoleRow {
        UserRoleId?: number;
        UserId?: number;
        RoleId?: number;
        Username?: string;
        User?: string;
    }
    namespace UserRoleRow {
        const idProperty = "UserRoleId";
        const localTextPrefix = "Administration.UserRole";
        const enum Fields {
            UserRoleId = "UserRoleId",
            UserId = "UserId",
            RoleId = "RoleId",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace HBIS.Administration {
    namespace UserRoleService {
        const baseUrl = "Administration/UserRole";
        function Update(request: UserRoleUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserRoleListRequest, onSuccess?: (response: UserRoleListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserRole/Update",
            List = "Administration/UserRole/List"
        }
    }
}
declare namespace HBIS.Administration {
    interface UserRoleUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Roles?: number[];
    }
}
declare namespace HBIS.Administration {
    interface UserRow {
        UserId?: number;
        Username?: string;
        Source?: string;
        PasswordHash?: string;
        PasswordSalt?: string;
        DisplayName?: string;
        Email?: string;
        UserImage?: string;
        LastDirectoryUpdate?: string;
        IsActive?: number;
        Password?: string;
        PasswordConfirm?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace UserRow {
        const idProperty = "UserId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Username";
        const localTextPrefix = "Administration.User";
        const lookupKey = "Administration.User";
        function getLookup(): Q.Lookup<UserRow>;
        const enum Fields {
            UserId = "UserId",
            Username = "Username",
            Source = "Source",
            PasswordHash = "PasswordHash",
            PasswordSalt = "PasswordSalt",
            DisplayName = "DisplayName",
            Email = "Email",
            UserImage = "UserImage",
            LastDirectoryUpdate = "LastDirectoryUpdate",
            IsActive = "IsActive",
            Password = "Password",
            PasswordConfirm = "PasswordConfirm",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace HBIS.Administration {
    namespace UserService {
        const baseUrl = "Administration/User";
        function Create(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/User/Create",
            Update = "Administration/User/Update",
            Delete = "Administration/User/Delete",
            Undelete = "Administration/User/Undelete",
            Retrieve = "Administration/User/Retrieve",
            List = "Administration/User/List"
        }
    }
}
declare namespace HBIS.Common.Pages {
    interface UploadResponse extends Serenity.ServiceResponse {
        TemporaryFile?: string;
        Size?: number;
        IsImage?: boolean;
        Width?: number;
        Height?: number;
    }
}
declare namespace HBIS.Common {
    interface UserPreferenceRetrieveRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
    }
}
declare namespace HBIS.Common {
    interface UserPreferenceRetrieveResponse extends Serenity.ServiceResponse {
        Value?: string;
    }
}
declare namespace HBIS.Common {
    interface UserPreferenceRow {
        UserPreferenceId?: number;
        UserId?: number;
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
    namespace UserPreferenceRow {
        const idProperty = "UserPreferenceId";
        const nameProperty = "Name";
        const localTextPrefix = "Common.UserPreference";
        const enum Fields {
            UserPreferenceId = "UserPreferenceId",
            UserId = "UserId",
            PreferenceType = "PreferenceType",
            Name = "Name",
            Value = "Value"
        }
    }
}
declare namespace HBIS.Common {
    namespace UserPreferenceService {
        const baseUrl = "Common/UserPreference";
        function Update(request: UserPreferenceUpdateRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: UserPreferenceRetrieveRequest, onSuccess?: (response: UserPreferenceRetrieveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Common/UserPreference/Update",
            Retrieve = "Common/UserPreference/Retrieve"
        }
    }
}
declare namespace HBIS.Common {
    interface UserPreferenceUpdateRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
}
declare namespace HBIS.CRUD {
    class ExameDescicaoForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ExameDescicaoForm {
        Descricao: Serenity.StringEditor;
    }
}
declare namespace HBIS.CRUD {
    interface ExameDescicaoRow {
        IdExameDescricao?: string;
        Descricao?: string;
    }
    namespace ExameDescicaoRow {
        const idProperty = "IdExameDescricao";
        const nameProperty = "Descricao";
        const localTextPrefix = "CRUD.ExameDescicao";
        namespace Fields {
            const IdExameDescricao: any;
            const Descricao: any;
        }
    }
}
declare namespace HBIS.CRUD {
    namespace ExameDescicaoService {
        const baseUrl = "CRUD/ExameDescicao";
        function Create(request: Serenity.SaveRequest<ExameDescicaoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ExameDescicaoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ExameDescicaoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ExameDescicaoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace HBIS.CRUD {
    class ExameForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ExameForm {
        IdPaciente: Serenity.StringEditor;
        IdExameDescicao: Serenity.StringEditor;
        Crm: Serenity.StringEditor;
        Resultado: Serenity.DecimalEditor;
    }
}
declare namespace HBIS.CRUD {
    interface ExameRow {
        IdExame?: string;
        IdPaciente?: string;
        IdExameDescicao?: string;
        Crm?: string;
        Resultado?: number;
        IdPacienteIdSexo?: string;
        IdPacienteIdTipoSanguineo?: string;
        IdPacienteAltura?: number;
        IdPacienteContatoEmergencia?: string;
        IdPacienteDataNascimento?: string;
        IdPacienteEmail?: string;
        IdPacienteFatorCorrecao?: number;
        IdPacienteGlicemiaIdeal?: number;
        IdPacienteInsulinaBasal?: number;
        IdPacienteInsulinaRapida?: number;
        IdPacienteNome?: string;
        IdPacientePeso?: number;
        IdExameDescicaoDescricao?: string;
        CrmCpf?: string;
        CrmNome?: string;
        CrmEmail?: string;
    }
    namespace ExameRow {
        const idProperty = "IdExame";
        const nameProperty = "Crm";
        const localTextPrefix = "CRUD.Exame";
        namespace Fields {
            const IdExame: any;
            const IdPaciente: any;
            const IdExameDescicao: any;
            const Crm: any;
            const Resultado: any;
            const IdPacienteIdSexo: any;
            const IdPacienteIdTipoSanguineo: any;
            const IdPacienteAltura: any;
            const IdPacienteContatoEmergencia: any;
            const IdPacienteDataNascimento: any;
            const IdPacienteEmail: any;
            const IdPacienteFatorCorrecao: any;
            const IdPacienteGlicemiaIdeal: any;
            const IdPacienteInsulinaBasal: any;
            const IdPacienteInsulinaRapida: any;
            const IdPacienteNome: any;
            const IdPacientePeso: any;
            const IdExameDescicaoDescricao: any;
            const CrmCpf: any;
            const CrmNome: any;
            const CrmEmail: any;
        }
    }
}
declare namespace HBIS.CRUD {
    namespace ExameService {
        const baseUrl = "CRUD/Exame";
        function Create(request: Serenity.SaveRequest<ExameRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ExameRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ExameRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ExameRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace HBIS.CRUD {
    class HistoricoForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface HistoricoForm {
        IdPaciente: Serenity.StringEditor;
        Carboidrato: Serenity.DecimalEditor;
        Data: Serenity.DateEditor;
        GlicemiaAtual: Serenity.DecimalEditor;
        Insulina: Serenity.DecimalEditor;
    }
}
declare namespace HBIS.CRUD {
    interface HistoricoRow {
        IdHistorico?: string;
        IdPaciente?: string;
        Carboidrato?: number;
        Data?: string;
        GlicemiaAtual?: number;
        Insulina?: number;
        IdPacienteIdSexo?: string;
        IdPacienteIdTipoSanguineo?: string;
        IdPacienteAltura?: number;
        IdPacienteContatoEmergencia?: string;
        IdPacienteDataNascimento?: string;
        IdPacienteEmail?: string;
        IdPacienteFatorCorrecao?: number;
        IdPacienteGlicemiaIdeal?: number;
        IdPacienteInsulinaBasal?: number;
        IdPacienteInsulinaRapida?: number;
        IdPacienteNome?: string;
        IdPacientePeso?: number;
    }
    namespace HistoricoRow {
        const idProperty = "IdHistorico";
        const localTextPrefix = "CRUD.Historico";
        namespace Fields {
            const IdHistorico: any;
            const IdPaciente: any;
            const Carboidrato: any;
            const Data: any;
            const GlicemiaAtual: any;
            const Insulina: any;
            const IdPacienteIdSexo: any;
            const IdPacienteIdTipoSanguineo: any;
            const IdPacienteAltura: any;
            const IdPacienteContatoEmergencia: any;
            const IdPacienteDataNascimento: any;
            const IdPacienteEmail: any;
            const IdPacienteFatorCorrecao: any;
            const IdPacienteGlicemiaIdeal: any;
            const IdPacienteInsulinaBasal: any;
            const IdPacienteInsulinaRapida: any;
            const IdPacienteNome: any;
            const IdPacientePeso: any;
        }
    }
}
declare namespace HBIS.CRUD {
    namespace HistoricoService {
        const baseUrl = "CRUD/Historico";
        function Create(request: Serenity.SaveRequest<HistoricoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<HistoricoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<HistoricoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<HistoricoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace HBIS.CRUD {
    class MedicoForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface MedicoForm {
        Cpf: Serenity.StringEditor;
        Nome: Serenity.StringEditor;
        Email: Serenity.StringEditor;
    }
}
declare namespace HBIS.CRUD {
    interface MedicoRow {
        Crm?: string;
        Cpf?: string;
        Nome?: string;
        Email?: string;
    }
    namespace MedicoRow {
        const idProperty = "Crm";
        const nameProperty = "Crm";
        const localTextPrefix = "CRUD.Medico";
        namespace Fields {
            const Crm: any;
            const Cpf: any;
            const Nome: any;
            const Email: any;
        }
    }
}
declare namespace HBIS.CRUD {
    namespace MedicoService {
        const baseUrl = "CRUD/Medico";
        function Create(request: Serenity.SaveRequest<MedicoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MedicoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MedicoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MedicoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace HBIS.CRUD {
    class PacienteForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface PacienteForm {
        IdSexo: Serenity.StringEditor;
        IdTipoSanguineo: Serenity.StringEditor;
        Altura: Serenity.DecimalEditor;
        ContatoEmergencia: Serenity.StringEditor;
        DataNascimento: Serenity.DateEditor;
        Email: Serenity.StringEditor;
        FatorCorrecao: Serenity.DecimalEditor;
        GlicemiaIdeal: Serenity.DecimalEditor;
        InsulinaBasal: Serenity.DecimalEditor;
        InsulinaRapida: Serenity.DecimalEditor;
        Nome: Serenity.StringEditor;
        Peso: Serenity.DecimalEditor;
    }
}
declare namespace HBIS.CRUD {
    interface PacienteRow {
        IdPaciente?: string;
        IdSexo?: string;
        IdTipoSanguineo?: string;
        Altura?: number;
        ContatoEmergencia?: string;
        DataNascimento?: string;
        Email?: string;
        FatorCorrecao?: number;
        GlicemiaIdeal?: number;
        InsulinaBasal?: number;
        InsulinaRapida?: number;
        Nome?: string;
        Peso?: number;
        IdSexoDescricao?: string;
        IdTipoSanguineoDescricao?: string;
    }
    namespace PacienteRow {
        const idProperty = "IdPaciente";
        const nameProperty = "ContatoEmergencia";
        const localTextPrefix = "CRUD.Paciente";
        namespace Fields {
            const IdPaciente: any;
            const IdSexo: any;
            const IdTipoSanguineo: any;
            const Altura: any;
            const ContatoEmergencia: any;
            const DataNascimento: any;
            const Email: any;
            const FatorCorrecao: any;
            const GlicemiaIdeal: any;
            const InsulinaBasal: any;
            const InsulinaRapida: any;
            const Nome: any;
            const Peso: any;
            const IdSexoDescricao: any;
            const IdTipoSanguineoDescricao: any;
        }
    }
}
declare namespace HBIS.CRUD {
    namespace PacienteService {
        const baseUrl = "CRUD/Paciente";
        function Create(request: Serenity.SaveRequest<PacienteRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PacienteRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PacienteRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PacienteRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace HBIS.CRUD {
    class SexoForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface SexoForm {
        Descricao: Serenity.StringEditor;
    }
}
declare namespace HBIS.CRUD {
    interface SexoRow {
        IdSexo?: string;
        Descricao?: string;
    }
    namespace SexoRow {
        const idProperty = "IdSexo";
        const nameProperty = "Descricao";
        const localTextPrefix = "CRUD.Sexo";
        namespace Fields {
            const IdSexo: any;
            const Descricao: any;
        }
    }
}
declare namespace HBIS.CRUD {
    namespace SexoService {
        const baseUrl = "CRUD/Sexo";
        function Create(request: Serenity.SaveRequest<SexoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SexoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SexoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SexoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace HBIS.CRUD {
    class TipoSanguineoForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface TipoSanguineoForm {
        Descricao: Serenity.StringEditor;
    }
}
declare namespace HBIS.CRUD {
    interface TipoSanguineoRow {
        IdTipoSanguineo?: string;
        Descricao?: string;
    }
    namespace TipoSanguineoRow {
        const idProperty = "IdTipoSanguineo";
        const nameProperty = "Descricao";
        const localTextPrefix = "CRUD.TipoSanguineo";
        namespace Fields {
            const IdTipoSanguineo: any;
            const Descricao: any;
        }
    }
}
declare namespace HBIS.CRUD {
    namespace TipoSanguineoService {
        const baseUrl = "CRUD/TipoSanguineo";
        function Create(request: Serenity.SaveRequest<TipoSanguineoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TipoSanguineoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TipoSanguineoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TipoSanguineoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace HBIS {
    interface ExcelImportRequest extends Serenity.ServiceRequest {
        FileName?: string;
    }
}
declare namespace HBIS {
    interface ExcelImportResponse extends Serenity.ServiceResponse {
        Inserted?: number;
        Updated?: number;
        ErrorList?: string[];
    }
}
declare namespace HBIS {
    interface GetNextNumberRequest extends Serenity.ServiceRequest {
        Prefix?: string;
        Length?: number;
    }
}
declare namespace HBIS {
    interface GetNextNumberResponse extends Serenity.ServiceResponse {
        Number?: number;
        Serial?: string;
    }
}
declare namespace HBIS.Membership {
    interface ChangePasswordForm {
        OldPassword: Serenity.PasswordEditor;
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ChangePasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace HBIS.Membership {
    interface ChangePasswordRequest extends Serenity.ServiceRequest {
        OldPassword?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace HBIS.Membership {
    interface ForgotPasswordForm {
        Email: Serenity.EmailEditor;
    }
    class ForgotPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace HBIS.Membership {
    interface ForgotPasswordRequest extends Serenity.ServiceRequest {
        Email?: string;
    }
}
declare namespace HBIS.Membership {
    interface LoginForm {
        Username: Serenity.StringEditor;
        Password: Serenity.PasswordEditor;
    }
    class LoginForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace HBIS.Membership {
    interface LoginRequest extends Serenity.ServiceRequest {
        Username?: string;
        Password?: string;
    }
}
declare namespace HBIS.Membership {
    interface ResetPasswordForm {
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ResetPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace HBIS.Membership {
    interface ResetPasswordRequest extends Serenity.ServiceRequest {
        Token?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace HBIS.Membership {
    interface SignUpForm {
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        ConfirmEmail: Serenity.EmailEditor;
        Password: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class SignUpForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace HBIS.Membership {
    interface SignUpRequest extends Serenity.ServiceRequest {
        DisplayName?: string;
        Email?: string;
        Password?: string;
    }
}
declare namespace HBIS.OLAP {
    class ExameDescicaoForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ExameDescicaoForm {
        Descricao: Serenity.StringEditor;
    }
}
declare namespace HBIS.OLAP {
    interface ExameDescicaoRow {
        IdExameDescricao?: number;
        Descricao?: string;
    }
    namespace ExameDescicaoRow {
        const idProperty = "IdExameDescricao";
        const nameProperty = "Descricao";
        const localTextPrefix = "OLAP.ExameDescicao";
        namespace Fields {
            const IdExameDescricao: any;
            const Descricao: any;
        }
    }
}
declare namespace HBIS.OLAP {
    namespace ExameDescicaoService {
        const baseUrl = "OLAP/ExameDescicao";
        function Create(request: Serenity.SaveRequest<ExameDescicaoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ExameDescicaoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ExameDescicaoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ExameDescicaoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace HBIS.OLAP {
    class ExameForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ExameForm {
        IdPaciente: Serenity.IntegerEditor;
        Crm: Serenity.StringEditor;
        IdExameDescricao: Serenity.IntegerEditor;
        Resultado: Serenity.DecimalEditor;
    }
}
declare namespace HBIS.OLAP {
    interface ExameRow {
        IdExame?: number;
        IdPaciente?: number;
        Crm?: string;
        IdExameDescricao?: number;
        Resultado?: number;
        IdPacienteIdSexo?: number;
        IdPacienteIdTipoSanguineo?: number;
        IdPacienteAltura?: number;
        IdPacienteContatoEmergencia?: string;
        IdPacienteDataNascimento?: string;
        IdPacienteEmail?: string;
        IdPacienteFatorCorrecao?: number;
        IdPacienteGlicemiaIdeal?: number;
        IdPacienteInsulinaBasal?: number;
        IdPacienteInsulinaRapida?: number;
        IdPacienteNome?: string;
        IdPacientePeso?: number;
        CrmCpf?: string;
        CrmNome?: string;
        CrmEmail?: string;
        IdExameDescricaoDescricao?: string;
    }
    namespace ExameRow {
        const idProperty = "IdExame";
        const nameProperty = "Crm";
        const localTextPrefix = "OLAP.Exame";
        namespace Fields {
            const IdExame: any;
            const IdPaciente: any;
            const Crm: any;
            const IdExameDescricao: any;
            const Resultado: any;
            const IdPacienteIdSexo: any;
            const IdPacienteIdTipoSanguineo: any;
            const IdPacienteAltura: any;
            const IdPacienteContatoEmergencia: any;
            const IdPacienteDataNascimento: any;
            const IdPacienteEmail: any;
            const IdPacienteFatorCorrecao: any;
            const IdPacienteGlicemiaIdeal: any;
            const IdPacienteInsulinaBasal: any;
            const IdPacienteInsulinaRapida: any;
            const IdPacienteNome: any;
            const IdPacientePeso: any;
            const CrmCpf: any;
            const CrmNome: any;
            const CrmEmail: any;
            const IdExameDescricaoDescricao: any;
        }
    }
}
declare namespace HBIS.OLAP {
    namespace ExameService {
        const baseUrl = "OLAP/Exame";
        function Create(request: Serenity.SaveRequest<ExameRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ExameRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ExameRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ExameRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace HBIS.OLAP {
    class HistoricoForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface HistoricoForm {
        IdPaciente: Serenity.IntegerEditor;
        Carboidrato: Serenity.DecimalEditor;
        Data: Serenity.DateEditor;
        GlicemiaAtual: Serenity.DecimalEditor;
        Insulina: Serenity.DecimalEditor;
    }
}
declare namespace HBIS.OLAP {
    interface HistoricoRow {
        IdHistorico?: number;
        IdPaciente?: number;
        Carboidrato?: number;
        Data?: string;
        GlicemiaAtual?: number;
        Insulina?: number;
        IdPacienteIdSexo?: number;
        IdPacienteIdTipoSanguineo?: number;
        IdPacienteAltura?: number;
        IdPacienteContatoEmergencia?: string;
        IdPacienteDataNascimento?: string;
        IdPacienteEmail?: string;
        IdPacienteFatorCorrecao?: number;
        IdPacienteGlicemiaIdeal?: number;
        IdPacienteInsulinaBasal?: number;
        IdPacienteInsulinaRapida?: number;
        IdPacienteNome?: string;
        IdPacientePeso?: number;
    }
    namespace HistoricoRow {
        const idProperty = "IdHistorico";
        const localTextPrefix = "OLAP.Historico";
        namespace Fields {
            const IdHistorico: any;
            const IdPaciente: any;
            const Carboidrato: any;
            const Data: any;
            const GlicemiaAtual: any;
            const Insulina: any;
            const IdPacienteIdSexo: any;
            const IdPacienteIdTipoSanguineo: any;
            const IdPacienteAltura: any;
            const IdPacienteContatoEmergencia: any;
            const IdPacienteDataNascimento: any;
            const IdPacienteEmail: any;
            const IdPacienteFatorCorrecao: any;
            const IdPacienteGlicemiaIdeal: any;
            const IdPacienteInsulinaBasal: any;
            const IdPacienteInsulinaRapida: any;
            const IdPacienteNome: any;
            const IdPacientePeso: any;
        }
    }
}
declare namespace HBIS.OLAP {
    namespace HistoricoService {
        const baseUrl = "OLAP/Historico";
        function Create(request: Serenity.SaveRequest<HistoricoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<HistoricoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<HistoricoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<HistoricoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace HBIS.OLAP {
    class MedicoForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface MedicoForm {
        Cpf: Serenity.StringEditor;
        Nome: Serenity.StringEditor;
        Email: Serenity.StringEditor;
    }
}
declare namespace HBIS.OLAP {
    interface MedicoRow {
        Crm?: string;
        Cpf?: string;
        Nome?: string;
        Email?: string;
    }
    namespace MedicoRow {
        const idProperty = "Crm";
        const nameProperty = "Crm";
        const localTextPrefix = "OLAP.Medico";
        namespace Fields {
            const Crm: any;
            const Cpf: any;
            const Nome: any;
            const Email: any;
        }
    }
}
declare namespace HBIS.OLAP {
    namespace MedicoService {
        const baseUrl = "OLAP/Medico";
        function Create(request: Serenity.SaveRequest<MedicoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MedicoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MedicoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MedicoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace HBIS.OLAP {
    class PacienteForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface PacienteForm {
        IdPaciente: Serenity.IntegerEditor;
        IdSexo: Serenity.IntegerEditor;
        Altura: Serenity.DecimalEditor;
        ContatoEmergencia: Serenity.StringEditor;
        DataNascimento: Serenity.DateEditor;
        Email: Serenity.StringEditor;
        FatorCorrecao: Serenity.DecimalEditor;
        GlicemiaIdeal: Serenity.DecimalEditor;
        InsulinaBasal: Serenity.DecimalEditor;
        InsulinaRapida: Serenity.DecimalEditor;
        Nome: Serenity.StringEditor;
        Peso: Serenity.DecimalEditor;
    }
}
declare namespace HBIS.OLAP {
    interface PacienteRow {
        IdPaciente?: number;
        IdSexo?: number;
        IdTipoSanguineo?: number;
        Altura?: number;
        ContatoEmergencia?: string;
        DataNascimento?: string;
        Email?: string;
        FatorCorrecao?: number;
        GlicemiaIdeal?: number;
        InsulinaBasal?: number;
        InsulinaRapida?: number;
        Nome?: string;
        Peso?: number;
        IdSexoDescricao?: string;
        IdTipoSanguineoDescricao?: string;
    }
    namespace PacienteRow {
        const idProperty = "IdTipoSanguineo";
        const nameProperty = "ContatoEmergencia";
        const localTextPrefix = "OLAP.Paciente";
        namespace Fields {
            const IdPaciente: any;
            const IdSexo: any;
            const IdTipoSanguineo: any;
            const Altura: any;
            const ContatoEmergencia: any;
            const DataNascimento: any;
            const Email: any;
            const FatorCorrecao: any;
            const GlicemiaIdeal: any;
            const InsulinaBasal: any;
            const InsulinaRapida: any;
            const Nome: any;
            const Peso: any;
            const IdSexoDescricao: any;
            const IdTipoSanguineoDescricao: any;
        }
    }
}
declare namespace HBIS.OLAP {
    namespace PacienteService {
        const baseUrl = "OLAP/Paciente";
        function Create(request: Serenity.SaveRequest<PacienteRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PacienteRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PacienteRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PacienteRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace HBIS.OLAP {
    class SexoForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface SexoForm {
        Descricao: Serenity.StringEditor;
    }
}
declare namespace HBIS.OLAP {
    interface SexoRow {
        IdSexo?: number;
        Descricao?: string;
    }
    namespace SexoRow {
        const idProperty = "IdSexo";
        const nameProperty = "Descricao";
        const localTextPrefix = "OLAP.Sexo";
        namespace Fields {
            const IdSexo: any;
            const Descricao: any;
        }
    }
}
declare namespace HBIS.OLAP {
    namespace SexoService {
        const baseUrl = "OLAP/Sexo";
        function Create(request: Serenity.SaveRequest<SexoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SexoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SexoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SexoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace HBIS.OLAP {
    class TipoSanguineoForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface TipoSanguineoForm {
        Descricao: Serenity.StringEditor;
    }
}
declare namespace HBIS.OLAP {
    interface TipoSanguineoRow {
        IdTipoSanguineo?: number;
        Descricao?: string;
    }
    namespace TipoSanguineoRow {
        const idProperty = "IdTipoSanguineo";
        const nameProperty = "Descricao";
        const localTextPrefix = "OLAP.TipoSanguineo";
        namespace Fields {
            const IdTipoSanguineo: any;
            const Descricao: any;
        }
    }
}
declare namespace HBIS.OLAP {
    namespace TipoSanguineoService {
        const baseUrl = "OLAP/TipoSanguineo";
        function Create(request: Serenity.SaveRequest<TipoSanguineoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TipoSanguineoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TipoSanguineoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TipoSanguineoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace HBIS.OLTP {
}
declare namespace HBIS.OLTP {
    class ExameDescicaoForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ExameDescicaoForm {
        Descricao: Serenity.StringEditor;
    }
}
declare namespace HBIS.OLTP {
    interface ExameDescicaoRow {
        IdExameDescricao?: string;
        Descricao?: string;
    }
    namespace ExameDescicaoRow {
        const idProperty = "IdExameDescricao";
        const nameProperty = "Descricao";
        const localTextPrefix = "OLTP.ExameDescicao";
        namespace Fields {
            const IdExameDescricao: any;
            const Descricao: any;
        }
    }
}
declare namespace HBIS.OLTP {
    namespace ExameDescicaoService {
        const baseUrl = "OLTP/ExameDescicao";
        function Create(request: Serenity.SaveRequest<ExameDescicaoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ExameDescicaoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ExameDescicaoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ExameDescicaoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace HBIS.OLTP {
    interface ExameForm {
        IdPaciente: Serenity.StringEditor;
        Crm: Serenity.StringEditor;
        TituloExame: Serenity.StringEditor;
        Resultado: Serenity.DecimalEditor;
    }
    class ExameForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace HBIS.OLTP {
    interface ExameRow {
        IdExame?: string;
        IdPaciente?: string;
        Crm?: string;
        TituloExame?: string;
        Resultado?: number;
    }
    namespace ExameRow {
        const idProperty = "IdExame";
        const nameProperty = "Crm";
        const localTextPrefix = "OLTP.Exame";
        const enum Fields {
            IdExame = "IdExame",
            IdPaciente = "IdPaciente",
            Crm = "Crm",
            TituloExame = "TituloExame",
            Resultado = "Resultado"
        }
    }
}
declare namespace HBIS.OLTP {
    namespace ExameService {
        const baseUrl = "OLTP/Exame";
        function Create(request: Serenity.SaveRequest<ExameRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ExameRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ExameRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ExameRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "OLTP/Exame/Create",
            Update = "OLTP/Exame/Update",
            Delete = "OLTP/Exame/Delete",
            Retrieve = "OLTP/Exame/Retrieve",
            List = "OLTP/Exame/List"
        }
    }
}
declare namespace HBIS.OLTP {
}
declare namespace HBIS.OLTP {
    interface HistoricoForm {
        IdPaciente: Serenity.StringEditor;
        Carboidrato: Serenity.DecimalEditor;
        Data: Serenity.DateEditor;
        GlicemiaAtual: Serenity.DecimalEditor;
        Insulina: Serenity.DecimalEditor;
    }
    class HistoricoForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace HBIS.OLTP {
    interface HistoricoRow {
        IdHistorico?: string;
        IdPaciente?: string;
        Carboidrato?: number;
        Data?: string;
        GlicemiaAtual?: number;
        Insulina?: number;
    }
    namespace HistoricoRow {
        const idProperty = "IdHistorico";
        const localTextPrefix = "OLTP.Historico";
        const enum Fields {
            IdHistorico = "IdHistorico",
            IdPaciente = "IdPaciente",
            Carboidrato = "Carboidrato",
            Data = "Data",
            GlicemiaAtual = "GlicemiaAtual",
            Insulina = "Insulina"
        }
    }
}
declare namespace HBIS.OLTP {
    namespace HistoricoService {
        const baseUrl = "OLTP/Historico";
        function Create(request: Serenity.SaveRequest<HistoricoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<HistoricoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<HistoricoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<HistoricoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "OLTP/Historico/Create",
            Update = "OLTP/Historico/Update",
            Delete = "OLTP/Historico/Delete",
            Retrieve = "OLTP/Historico/Retrieve",
            List = "OLTP/Historico/List"
        }
    }
}
declare namespace HBIS.OLTP {
}
declare namespace HBIS.OLTP {
    interface MedicoForm {
        Cpf: Serenity.StringEditor;
        Nome: Serenity.StringEditor;
        Email: Serenity.StringEditor;
    }
    class MedicoForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace HBIS.OLTP {
    interface MedicoRow {
        Crm?: string;
        Cpf?: string;
        Nome?: string;
        Email?: string;
    }
    namespace MedicoRow {
        const idProperty = "Crm";
        const nameProperty = "Crm";
        const localTextPrefix = "OLTP.Medico";
        const enum Fields {
            Crm = "Crm",
            Cpf = "Cpf",
            Nome = "Nome",
            Email = "Email"
        }
    }
}
declare namespace HBIS.OLTP {
    namespace MedicoService {
        const baseUrl = "OLTP/Medico";
        function Create(request: Serenity.SaveRequest<MedicoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MedicoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MedicoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MedicoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "OLTP/Medico/Create",
            Update = "OLTP/Medico/Update",
            Delete = "OLTP/Medico/Delete",
            Retrieve = "OLTP/Medico/Retrieve",
            List = "OLTP/Medico/List"
        }
    }
}
declare namespace HBIS.OLTP {
}
declare namespace HBIS.OLTP {
    interface PacienteForm {
        Altura: Serenity.DecimalEditor;
        ContatoEmergencia: Serenity.StringEditor;
        DataNascimento: Serenity.DateEditor;
        Email: Serenity.StringEditor;
        FatorCorrecao: Serenity.DecimalEditor;
        GlicemiaIdeal: Serenity.DecimalEditor;
        InsulinaBasal: Serenity.DecimalEditor;
        InsulinaRapida: Serenity.DecimalEditor;
        Nome: Serenity.StringEditor;
        Peso: Serenity.DecimalEditor;
        Sexo: Serenity.StringEditor;
        TipoSanguineo: Serenity.StringEditor;
    }
    class PacienteForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace HBIS.OLTP {
    interface PacienteRow {
        IdPaciente?: string;
        Altura?: number;
        ContatoEmergencia?: string;
        DataNascimento?: string;
        Email?: string;
        FatorCorrecao?: number;
        GlicemiaIdeal?: number;
        InsulinaBasal?: number;
        InsulinaRapida?: number;
        Nome?: string;
        Peso?: number;
        Sexo?: string;
        TipoSanguineo?: string;
    }
    namespace PacienteRow {
        const idProperty = "IdPaciente";
        const nameProperty = "ContatoEmergencia";
        const localTextPrefix = "OLTP.Paciente";
        const enum Fields {
            IdPaciente = "IdPaciente",
            Altura = "Altura",
            ContatoEmergencia = "ContatoEmergencia",
            DataNascimento = "DataNascimento",
            Email = "Email",
            FatorCorrecao = "FatorCorrecao",
            GlicemiaIdeal = "GlicemiaIdeal",
            InsulinaBasal = "InsulinaBasal",
            InsulinaRapida = "InsulinaRapida",
            Nome = "Nome",
            Peso = "Peso",
            Sexo = "Sexo",
            TipoSanguineo = "TipoSanguineo"
        }
    }
}
declare namespace HBIS.OLTP {
    namespace PacienteService {
        const baseUrl = "OLTP/Paciente";
        function Create(request: Serenity.SaveRequest<PacienteRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PacienteRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PacienteRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PacienteRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "OLTP/Paciente/Create",
            Update = "OLTP/Paciente/Update",
            Delete = "OLTP/Paciente/Delete",
            Retrieve = "OLTP/Paciente/Retrieve",
            List = "OLTP/Paciente/List"
        }
    }
}
declare namespace HBIS.OLTP {
    class SexoForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface SexoForm {
        Descricao: Serenity.StringEditor;
    }
}
declare namespace HBIS.OLTP {
    interface SexoRow {
        IdSexo?: string;
        Descricao?: string;
    }
    namespace SexoRow {
        const idProperty = "IdSexo";
        const nameProperty = "Descricao";
        const localTextPrefix = "OLTP.Sexo";
        namespace Fields {
            const IdSexo: any;
            const Descricao: any;
        }
    }
}
declare namespace HBIS.OLTP {
    namespace SexoService {
        const baseUrl = "OLTP/Sexo";
        function Create(request: Serenity.SaveRequest<SexoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SexoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SexoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SexoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace HBIS.OLTP {
    class TipoSanguineoForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface TipoSanguineoForm {
        Descricao: Serenity.StringEditor;
    }
}
declare namespace HBIS.OLTP {
    interface TipoSanguineoRow {
        IdTipoSanguineo?: string;
        Descricao?: string;
    }
    namespace TipoSanguineoRow {
        const idProperty = "IdTipoSanguineo";
        const nameProperty = "Descricao";
        const localTextPrefix = "OLTP.TipoSanguineo";
        namespace Fields {
            const IdTipoSanguineo: any;
            const Descricao: any;
        }
    }
}
declare namespace HBIS.OLTP {
    namespace TipoSanguineoService {
        const baseUrl = "OLTP/TipoSanguineo";
        function Create(request: Serenity.SaveRequest<TipoSanguineoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TipoSanguineoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TipoSanguineoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TipoSanguineoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace HBIS {
    interface ScriptUserDefinition {
        Username?: string;
        DisplayName?: string;
        IsAdmin?: boolean;
        Permissions?: {
            [key: string]: boolean;
        };
    }
}
declare namespace HBIS.LanguageList {
    function getValue(): string[][];
}
declare namespace HBIS.ScriptInitialization {
}
declare namespace HBIS.ADD {
    class ExameDialog extends Serenity.EntityDialog<ExameRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ExameForm;
    }
}
declare namespace HBIS.ADD {
    class ExameGrid extends Serenity.EntityGrid<ExameRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ExameDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace HBIS.ADD {
    class ExameDescicaoDialog extends Serenity.EntityDialog<ExameDescicaoRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ExameDescicaoForm;
    }
}
declare namespace HBIS.ADD {
    class ExameDescicaoGrid extends Serenity.EntityGrid<ExameDescicaoRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ExameDescicaoDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace HBIS.ADD {
    class HistoricoDialog extends Serenity.EntityDialog<HistoricoRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected form: HistoricoForm;
    }
}
declare namespace HBIS.ADD {
    class HistoricoGrid extends Serenity.EntityGrid<HistoricoRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof HistoricoDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace HBIS.ADD {
    class MedicoDialog extends Serenity.EntityDialog<MedicoRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: MedicoForm;
    }
}
declare namespace HBIS.ADD {
    class MedicoGrid extends Serenity.EntityGrid<MedicoRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MedicoDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace HBIS.ADD {
    class PacienteDialog extends Serenity.EntityDialog<PacienteRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: PacienteForm;
    }
}
declare namespace HBIS.ADD {
    class PacienteGrid extends Serenity.EntityGrid<PacienteRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PacienteDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace HBIS.ADD {
    class SexoDialog extends Serenity.EntityDialog<SexoRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: SexoForm;
    }
}
declare namespace HBIS.ADD {
    class SexoGrid extends Serenity.EntityGrid<SexoRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SexoDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace HBIS.ADD {
    class TipoSanguineoDialog extends Serenity.EntityDialog<TipoSanguineoRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: TipoSanguineoForm;
    }
}
declare namespace HBIS.ADD {
    class TipoSanguineoGrid extends Serenity.EntityGrid<TipoSanguineoRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TipoSanguineoDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace HBIS.Administration {
    class LanguageDialog extends Serenity.EntityDialog<LanguageRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LanguageForm;
    }
}
declare namespace HBIS.Administration {
    class LanguageGrid extends Serenity.EntityGrid<LanguageRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LanguageDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): LanguageRow.Fields[];
    }
}
declare namespace HBIS.Administration {
    class RoleDialog extends Serenity.EntityDialog<RoleRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RoleForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace HBIS.Administration {
    class RoleGrid extends Serenity.EntityGrid<RoleRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RoleDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): RoleRow.Fields[];
    }
}
declare namespace HBIS.Administration {
    class RolePermissionDialog extends Serenity.TemplatedDialog<RolePermissionDialogOptions> {
        private permissions;
        constructor(opt: RolePermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface RolePermissionDialogOptions {
        roleID?: number;
        title?: string;
    }
}
declare namespace HBIS.Administration {
    class TranslationGrid extends Serenity.EntityGrid<TranslationItem, any> {
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private hasChanges;
        private searchText;
        private sourceLanguage;
        private targetLanguage;
        private targetLanguageKey;
        constructor(container: JQuery);
        protected onClick(e: JQueryEventObject, row: number, cell: number): any;
        protected getColumns(): Slick.Column[];
        protected createToolbarExtensions(): void;
        protected saveChanges(language: string): PromiseLike<any>;
        protected onViewSubmit(): boolean;
        protected getButtons(): Serenity.ToolButton[];
        protected createQuickSearchInput(): void;
        protected onViewFilter(item: TranslationItem): boolean;
        protected usePager(): boolean;
    }
}
declare namespace HBIS.Administration {
    class UserDialog extends Serenity.EntityDialog<UserRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: UserForm;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
        protected afterLoadEntity(): void;
    }
}
declare namespace HBIS.Administration {
    class UserGrid extends Serenity.EntityGrid<UserRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UserDialog;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): UserRow.Fields[];
    }
}
declare namespace HBIS.Administration {
    class PermissionCheckEditor extends Serenity.DataGrid<PermissionCheckItem, PermissionCheckEditorOptions> {
        protected getIdProperty(): string;
        private searchText;
        private byParentKey;
        constructor(container: JQuery, opt: PermissionCheckEditorOptions);
        private getItemGrantRevokeClass;
        private roleOrImplicit;
        private getItemEffectiveClass;
        protected getColumns(): Slick.Column[];
        setItems(items: PermissionCheckItem[]): void;
        protected onViewSubmit(): boolean;
        protected onViewFilter(item: PermissionCheckItem): boolean;
        private matchContains;
        private getDescendants;
        protected onClick(e: any, row: any, cell: any): void;
        private getParentKey;
        protected getButtons(): Serenity.ToolButton[];
        protected createToolbarExtensions(): void;
        private getSortedGroupAndPermissionKeys;
        value: UserPermissionRow[];
        private _rolePermissions;
        rolePermissions: string[];
        private _implicitPermissions;
        implicitPermissions: Q.Dictionary<string[]>;
    }
    interface PermissionCheckEditorOptions {
        showRevoke?: boolean;
    }
    interface PermissionCheckItem {
        ParentKey?: string;
        Key?: string;
        Title?: string;
        IsGroup?: boolean;
        GrantRevoke?: boolean;
    }
}
declare namespace HBIS.Administration {
    class UserPermissionDialog extends Serenity.TemplatedDialog<UserPermissionDialogOptions> {
        private permissions;
        constructor(opt: UserPermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserPermissionDialogOptions {
        userID?: number;
        username?: string;
    }
}
declare namespace HBIS.Administration {
    class RoleCheckEditor extends Serenity.CheckTreeEditor<Serenity.CheckTreeItem<any>, any> {
        private searchText;
        constructor(div: JQuery);
        protected createToolbarExtensions(): void;
        protected getButtons(): any[];
        protected getTreeItems(): Serenity.CheckTreeItem<any>[];
        protected onViewFilter(item: any): boolean;
    }
}
declare namespace HBIS.Administration {
    class UserRoleDialog extends Serenity.TemplatedDialog<UserRoleDialogOptions> {
        private permissions;
        constructor(opt: UserRoleDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserRoleDialogOptions {
        userID: number;
        username: string;
    }
}
declare namespace HBIS {
    class BasicProgressDialog extends Serenity.TemplatedDialog<any> {
        constructor();
        cancelled: boolean;
        max: number;
        value: number;
        title: string;
        cancelTitle: string;
        getDialogOptions(): JQueryUI.DialogOptions;
        initDialog(): void;
        getTemplate(): string;
    }
}
declare namespace HBIS.Common {
    class BulkServiceAction {
        protected keys: string[];
        protected queue: string[];
        protected queueIndex: number;
        protected progressDialog: BasicProgressDialog;
        protected pendingRequests: number;
        protected completedRequests: number;
        protected errorByKey: Q.Dictionary<Serenity.ServiceError>;
        private successCount;
        private errorCount;
        done: () => void;
        protected createProgressDialog(): void;
        protected getConfirmationFormat(): string;
        protected getConfirmationMessage(targetCount: any): string;
        protected confirm(targetCount: any, action: any): void;
        protected getNothingToProcessMessage(): string;
        protected nothingToProcess(): void;
        protected getParallelRequests(): number;
        protected getBatchSize(): number;
        protected startParallelExecution(): void;
        protected serviceCallCleanup(): void;
        protected executeForBatch(batch: string[]): void;
        protected executeNextBatch(): void;
        protected getAllHadErrorsFormat(): string;
        protected showAllHadErrors(): void;
        protected getSomeHadErrorsFormat(): string;
        protected showSomeHadErrors(): void;
        protected getAllSuccessFormat(): string;
        protected showAllSuccess(): void;
        protected showResults(): void;
        execute(keys: string[]): void;
        get_successCount(): any;
        set_successCount(value: number): void;
        get_errorCount(): any;
        set_errorCount(value: number): void;
    }
}
declare namespace HBIS.DialogUtils {
    function pendingChangesConfirmation(element: JQuery, hasPendingChanges: () => boolean): void;
}
declare namespace HBIS.Common {
    class EnumSelectFormatter implements Slick.Formatter {
        constructor();
        format(ctx: Slick.FormatterContext): string;
        enumKey: string;
        allowClear: boolean;
        emptyItemText: string;
    }
}
declare namespace HBIS.Common {
    interface ExcelExportOptions {
        grid: Serenity.DataGrid<any, any>;
        service: string;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
    }
    namespace ExcelExportHelper {
        function createToolButton(options: ExcelExportOptions): Serenity.ToolButton;
    }
}
declare namespace HBIS.Common {
    class GridEditorBase<TEntity> extends Serenity.EntityGrid<TEntity, any> implements Serenity.IGetEditValue, Serenity.ISetEditValue {
        protected getIdProperty(): string;
        protected nextId: number;
        constructor(container: JQuery);
        protected id(entity: TEntity): any;
        protected getNextId(): string;
        protected setNewId(entity: TEntity): void;
        protected save(opt: Serenity.ServiceOptions<any>, callback: (r: Serenity.ServiceResponse) => void): void;
        protected deleteEntity(id: number): boolean;
        protected validateEntity(row: TEntity, id: number): boolean;
        protected setEntities(items: TEntity[]): void;
        protected getNewEntity(): TEntity;
        protected getButtons(): Serenity.ToolButton[];
        protected editItem(entityOrId: any): void;
        getEditValue(property: any, target: any): void;
        setEditValue(source: any, property: any): void;
        value: TEntity[];
        protected getGridCanLoad(): boolean;
        protected usePager(): boolean;
        protected getInitialTitle(): any;
        protected createQuickSearchInput(): void;
    }
}
declare namespace HBIS.Common {
    class GridEditorDialog<TEntity> extends Serenity.EntityDialog<TEntity, any> {
        protected getIdProperty(): string;
        onSave: (options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void) => void;
        onDelete: (options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void) => void;
        destroy(): void;
        protected updateInterface(): void;
        protected saveHandler(options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void): void;
        protected deleteHandler(options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void): void;
    }
}
declare namespace HBIS {
    /**
     * This is an editor widget but it only displays a text, not edits it.
     *
     */
    class StaticTextBlock extends Serenity.Widget<StaticTextBlockOptions> implements Serenity.ISetEditValue {
        private value;
        constructor(container: JQuery, options: StaticTextBlockOptions);
        private updateElementContent;
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        setEditValue(source: any, property: Serenity.PropertyItem): void;
    }
    interface StaticTextBlockOptions {
        text: string;
        isHtml: boolean;
        isLocalText: boolean;
        hideLabel: boolean;
    }
}
declare namespace HBIS.Common {
    class LanguageSelection extends Serenity.Widget<any> {
        constructor(select: JQuery, currentLanguage: string);
    }
}
declare namespace HBIS.Common {
    class SidebarSearch extends Serenity.Widget<any> {
        private menuUL;
        constructor(input: JQuery, menuUL: JQuery);
        protected updateMatchFlags(text: string): void;
    }
}
declare namespace HBIS.Common {
    class ThemeSelection extends Serenity.Widget<any> {
        constructor(select: JQuery);
        protected getCurrentTheme(): string;
    }
}
declare var jsPDF: any;
declare namespace HBIS.Common {
    interface PdfExportOptions {
        grid: Serenity.DataGrid<any, any>;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
        reportTitle?: string;
        titleTop?: number;
        titleFontSize?: number;
        fileName?: string;
        pageNumbers?: boolean;
        columnTitles?: {
            [key: string]: string;
        };
        tableOptions?: jsPDF.AutoTableOptions;
        output?: string;
        autoPrint?: boolean;
        printDateTimeHeader?: boolean;
    }
    namespace PdfExportHelper {
        function exportToPdf(options: PdfExportOptions): void;
        function createToolButton(options: PdfExportOptions): Serenity.ToolButton;
    }
}
declare var jsPDF: any;
declare namespace HBIS.Common {
    class ReportDialog extends Serenity.TemplatedDialog<ReportDialogOptions> {
        private report;
        private propertyGrid;
        constructor(options: ReportDialogOptions);
        protected getDialogButtons(): any;
        protected createPropertyGrid(): void;
        protected loadReport(reportKey: string): void;
        protected updateInterface(): void;
        executeReport(target: string, ext: string, download: boolean): void;
        getToolbarButtons(): {
            title: string;
            cssClass: string;
            onClick: () => void;
        }[];
    }
    interface ReportDialogOptions {
        reportKey: string;
    }
}
declare namespace HBIS.Common {
    interface ReportExecuteOptions {
        reportKey: string;
        download?: boolean;
        extension?: 'pdf' | 'htm' | 'html' | 'xlsx' | 'docx';
        getParams?: () => any;
        params?: {
            [key: string]: any;
        };
        target?: string;
    }
    interface ReportButtonOptions extends ReportExecuteOptions {
        title?: string;
        cssClass?: string;
        icon?: string;
    }
    namespace ReportHelper {
        function createToolButton(options: ReportButtonOptions): Serenity.ToolButton;
        function execute(options: ReportExecuteOptions): void;
    }
}
declare var jsPDF: any;
declare namespace HBIS.Common {
    class ReportPage extends Serenity.Widget<any> {
        private reportKey;
        private propertyItems;
        private propertyGrid;
        constructor(element: JQuery);
        protected updateMatchFlags(text: string): void;
        protected categoryClick(e: any): void;
        protected reportLinkClick(e: any): void;
    }
}
declare namespace HBIS.Common {
    class UserPreferenceStorage implements Serenity.SettingStorage {
        getItem(key: string): string;
        setItem(key: string, data: string): void;
    }
}
declare namespace HBIS.Authorization {
    let userDefinition: ScriptUserDefinition;
    function hasPermission(permissionKey: string): boolean;
}
declare namespace HBIS.Membership {
    class ChangePasswordPanel extends Serenity.PropertyPanel<ChangePasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace HBIS.Membership {
    class ForgotPasswordPanel extends Serenity.PropertyPanel<ForgotPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace HBIS.Membership {
    class ResetPasswordPanel extends Serenity.PropertyPanel<ResetPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace HBIS.Membership {
    class SignUpPanel extends Serenity.PropertyPanel<SignUpRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
