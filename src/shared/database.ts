import { openDB, type IDBPDatabase } from "idb";

import type { ScramjetDB } from "@/types";

export const SCRAMJET_DB_NAME = "$scramjet";
export const SCRAMJET_DB_VERSION = 2;

export function openScramjetDB(): Promise<IDBPDatabase<ScramjetDB>> {
	return openDB<ScramjetDB>(SCRAMJET_DB_NAME, SCRAMJET_DB_VERSION, {
		upgrade(db) {
			if (!db.objectStoreNames.contains("config")) {
				db.createObjectStore("config");
			}

			if (!db.objectStoreNames.contains("cookies")) {
				db.createObjectStore("cookies");
			}

			if (!db.objectStoreNames.contains("redirectTrackers")) {
				db.createObjectStore("redirectTrackers");
			}

			if (!db.objectStoreNames.contains("referrerPolicies")) {
				db.createObjectStore("referrerPolicies");
			}

			if (!db.objectStoreNames.contains("publicSuffixList")) {
				db.createObjectStore("publicSuffixList");
			}
		},
	});
}
