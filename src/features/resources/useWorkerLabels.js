import { useSelector } from "react-redux";
import { selectLang } from "../app/appSlice";
import { useGetUserDataQuery } from "../auth/authApiSlice";

// WORKER-type resources are the people running the farm — IDA users call
// them managers, everyone else workers. Returns the singular and plural label,
// and the title for a new one.
export default function useWorkerLabels() {
    const text = useSelector(selectLang);
    const { data: user } = useGetUserDataQuery();
    const isIda = (user?.userConf ?? []).some((e) => e.type === 'IDA');
    return isIda
        ? { one: text?.manager || "Manager", many: text?.managers || "Managers", newOne: text?.newManager || "New Manager" }
        : { one: text?.worker || "Worker", many: text?.workers || "Workers", newOne: text?.newWorker || "New Worker" };
}
