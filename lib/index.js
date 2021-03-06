"use strict";

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

var _lodash = require("lodash");

var _commander = require("commander");

var _safe = require("colors/safe");

var _safe2 = _interopRequireDefault(_safe);

var _package = require("../package.json");

var _package2 = _interopRequireDefault(_package);

var _upgradeRequest = require("./upgrade-request");

var _upgradeRequest2 = _interopRequireDefault(_upgradeRequest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let cmd = new _commander.Command(_package2.default.name);
let defaultPrefix = "yarn-upgrade/";
cmd.version(_package2.default.version).description(_package2.default.description).option("-n, --username <username>", "specify the commit auther name. You may set GIT_USER_NAME to environment variable.", process.env.GIT_USER_NAME).option("-e, --useremail <useremail>", "specify the commit auther email. You may set GIT_USER_EMAIL to environment variable.", process.env.GIT_USER_EMAIL).option("-t, --token <token>", "specify personal access token for GitHub. use only for debugging purpose. You should set GITHUB_ACCESS_TOKEN to environment variable.", process.env.GITHUB_ACCESS_TOKEN).option("--execute", "if you don't specify this option, allows you to test this application.", false).option("-v, --verbose", `shows details about the running ${_package2.default.name}`, false).option("-k, --keep", "if you specify this option, keep working branch after all.", false).option("--prefix <prefix>", `specify working branch prefix. default prefix is "${defaultPrefix}"`, defaultPrefix).option("--workingdir <path>", `specify project root dir. it contains package.json. default path is ${process.cwd()}`, process.cwd()).option("--with-shadows", "if you specify this option, shows shadow dependencies changes.", false).parse(process.argv);

/* eslint-disable no-console */
if (cmd.username && cmd.useremail && cmd.token) {
    cmd.now = (0, _moment2.default)().format("YYYYMMDDhhmmss");
    cmd.logger = cmd.verbose ? m => console.log(`> ${m}`) : () => {};
    Promise.all([(0, _upgradeRequest2.default)(cmd)]).then(([msg]) => {
        msg && console.log(msg);
        cmd.logger("All done!!");
    }).catch(err => {
        if ((0, _lodash.isString)(err)) {
            console.log(err);
        } else {
            console.error(err);
            process.exit(1);
        }
    });
} else {
    console.log(_safe2.default.red("Please set required parameters: username, useremail, token"));
    cmd.help();
}
/* eslint-enable no-console */
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJjbWQiLCJuYW1lIiwiZGVmYXVsdFByZWZpeCIsInZlcnNpb24iLCJkZXNjcmlwdGlvbiIsIm9wdGlvbiIsInByb2Nlc3MiLCJlbnYiLCJHSVRfVVNFUl9OQU1FIiwiR0lUX1VTRVJfRU1BSUwiLCJHSVRIVUJfQUNDRVNTX1RPS0VOIiwiY3dkIiwicGFyc2UiLCJhcmd2IiwidXNlcm5hbWUiLCJ1c2VyZW1haWwiLCJ0b2tlbiIsIm5vdyIsImZvcm1hdCIsImxvZ2dlciIsInZlcmJvc2UiLCJtIiwiY29uc29sZSIsImxvZyIsIlByb21pc2UiLCJhbGwiLCJ0aGVuIiwibXNnIiwiY2F0Y2giLCJlcnIiLCJlcnJvciIsImV4aXQiLCJyZWQiLCJoZWxwIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFJQSxNQUFNLHVCQUFZLGtCQUFJQyxJQUFoQixDQUFWO0FBQ0EsSUFBSUMsZ0JBQWdCLGVBQXBCO0FBQ0FGLElBQUlHLE9BQUosQ0FBWSxrQkFBSUEsT0FBaEIsRUFDS0MsV0FETCxDQUNpQixrQkFBSUEsV0FEckIsRUFFS0MsTUFGTCxDQUVZLDJCQUZaLEVBRXlDLG9GQUZ6QyxFQUUrSEMsUUFBUUMsR0FBUixDQUFZQyxhQUYzSSxFQUdLSCxNQUhMLENBR1ksNkJBSFosRUFHMkMsc0ZBSDNDLEVBR21JQyxRQUFRQyxHQUFSLENBQVlFLGNBSC9JLEVBSUtKLE1BSkwsQ0FJWSxxQkFKWixFQUltQyx1SUFKbkMsRUFJNEtDLFFBQVFDLEdBQVIsQ0FBWUcsbUJBSnhMLEVBS0tMLE1BTEwsQ0FLWSxXQUxaLEVBS3lCLHdFQUx6QixFQUttRyxLQUxuRyxFQU1LQSxNQU5MLENBTVksZUFOWixFQU04QixtQ0FBa0Msa0JBQUlKLElBQUssRUFOekUsRUFNNEUsS0FONUUsRUFPS0ksTUFQTCxDQU9ZLFlBUFosRUFPMEIsNERBUDFCLEVBT3dGLEtBUHhGLEVBUUtBLE1BUkwsQ0FRWSxtQkFSWixFQVFrQyxxREFBb0RILGFBQWMsR0FScEcsRUFRd0dBLGFBUnhHLEVBU0tHLE1BVEwsQ0FTWSxxQkFUWixFQVNvQyx1RUFBc0VDLFFBQVFLLEdBQVIsRUFBYyxFQVR4SCxFQVMySEwsUUFBUUssR0FBUixFQVQzSCxFQVVLTixNQVZMLENBVVksZ0JBVlosRUFVOEIsZ0VBVjlCLEVBVWdHLEtBVmhHLEVBV0tPLEtBWEwsQ0FXV04sUUFBUU8sSUFYbkI7O0FBYUE7QUFDQSxJQUFJYixJQUFJYyxRQUFKLElBQWdCZCxJQUFJZSxTQUFwQixJQUFpQ2YsSUFBSWdCLEtBQXpDLEVBQWdEO0FBQzVDaEIsUUFBSWlCLEdBQUosR0FBVSx3QkFBU0MsTUFBVCxDQUFnQixnQkFBaEIsQ0FBVjtBQUNBbEIsUUFBSW1CLE1BQUosR0FBYW5CLElBQUlvQixPQUFKLEdBQWNDLEtBQUtDLFFBQVFDLEdBQVIsQ0FBYSxLQUFJRixDQUFFLEVBQW5CLENBQW5CLEdBQTJDLE1BQU0sQ0FBRyxDQUFqRTtBQUNBRyxZQUFRQyxHQUFSLENBQVksQ0FBQyw4QkFBR3pCLEdBQUgsQ0FBRCxDQUFaLEVBQ0swQixJQURMLENBQ1UsQ0FBQyxDQUFDQyxHQUFELENBQUQsS0FBVztBQUNiQSxlQUFPTCxRQUFRQyxHQUFSLENBQVlJLEdBQVosQ0FBUDtBQUNBM0IsWUFBSW1CLE1BQUosQ0FBVyxZQUFYO0FBQ0gsS0FKTCxFQUtLUyxLQUxMLENBS1lDLEdBQUQsSUFBUztBQUNaLFlBQUksc0JBQVNBLEdBQVQsQ0FBSixFQUFtQjtBQUNmUCxvQkFBUUMsR0FBUixDQUFZTSxHQUFaO0FBQ0gsU0FGRCxNQUVPO0FBQ0hQLG9CQUFRUSxLQUFSLENBQWNELEdBQWQ7QUFDQXZCLG9CQUFReUIsSUFBUixDQUFhLENBQWI7QUFDSDtBQUNKLEtBWkw7QUFhSCxDQWhCRCxNQWdCTztBQUNIVCxZQUFRQyxHQUFSLENBQVksZUFBT1MsR0FBUCxDQUFXLDREQUFYLENBQVo7QUFDQWhDLFFBQUlpQyxJQUFKO0FBQ0g7QUFDRCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xuaW1wb3J0IHsgaXNTdHJpbmcgfSBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgeyBDb21tYW5kIH0gZnJvbSBcImNvbW1hbmRlclwiO1xuaW1wb3J0IGNvbG9ycyBmcm9tIFwiY29sb3JzL3NhZmVcIjtcblxuaW1wb3J0IHBrZyBmcm9tIFwiLi4vcGFja2FnZS5qc29uXCI7XG5pbXBvcnQgdXIgZnJvbSBcIi4vdXBncmFkZS1yZXF1ZXN0XCI7XG5cbmxldCBjbWQgPSBuZXcgQ29tbWFuZChwa2cubmFtZSk7XG5sZXQgZGVmYXVsdFByZWZpeCA9IFwieWFybi11cGdyYWRlL1wiO1xuY21kLnZlcnNpb24ocGtnLnZlcnNpb24pXG4gICAgLmRlc2NyaXB0aW9uKHBrZy5kZXNjcmlwdGlvbilcbiAgICAub3B0aW9uKFwiLW4sIC0tdXNlcm5hbWUgPHVzZXJuYW1lPlwiLCBcInNwZWNpZnkgdGhlIGNvbW1pdCBhdXRoZXIgbmFtZS4gWW91IG1heSBzZXQgR0lUX1VTRVJfTkFNRSB0byBlbnZpcm9ubWVudCB2YXJpYWJsZS5cIiwgcHJvY2Vzcy5lbnYuR0lUX1VTRVJfTkFNRSlcbiAgICAub3B0aW9uKFwiLWUsIC0tdXNlcmVtYWlsIDx1c2VyZW1haWw+XCIsIFwic3BlY2lmeSB0aGUgY29tbWl0IGF1dGhlciBlbWFpbC4gWW91IG1heSBzZXQgR0lUX1VTRVJfRU1BSUwgdG8gZW52aXJvbm1lbnQgdmFyaWFibGUuXCIsIHByb2Nlc3MuZW52LkdJVF9VU0VSX0VNQUlMKVxuICAgIC5vcHRpb24oXCItdCwgLS10b2tlbiA8dG9rZW4+XCIsIFwic3BlY2lmeSBwZXJzb25hbCBhY2Nlc3MgdG9rZW4gZm9yIEdpdEh1Yi4gdXNlIG9ubHkgZm9yIGRlYnVnZ2luZyBwdXJwb3NlLiBZb3Ugc2hvdWxkIHNldCBHSVRIVUJfQUNDRVNTX1RPS0VOIHRvIGVudmlyb25tZW50IHZhcmlhYmxlLlwiLCBwcm9jZXNzLmVudi5HSVRIVUJfQUNDRVNTX1RPS0VOKVxuICAgIC5vcHRpb24oXCItLWV4ZWN1dGVcIiwgXCJpZiB5b3UgZG9uJ3Qgc3BlY2lmeSB0aGlzIG9wdGlvbiwgYWxsb3dzIHlvdSB0byB0ZXN0IHRoaXMgYXBwbGljYXRpb24uXCIsIGZhbHNlKVxuICAgIC5vcHRpb24oXCItdiwgLS12ZXJib3NlXCIsIGBzaG93cyBkZXRhaWxzIGFib3V0IHRoZSBydW5uaW5nICR7cGtnLm5hbWV9YCwgZmFsc2UpXG4gICAgLm9wdGlvbihcIi1rLCAtLWtlZXBcIiwgXCJpZiB5b3Ugc3BlY2lmeSB0aGlzIG9wdGlvbiwga2VlcCB3b3JraW5nIGJyYW5jaCBhZnRlciBhbGwuXCIsIGZhbHNlKVxuICAgIC5vcHRpb24oXCItLXByZWZpeCA8cHJlZml4PlwiLCBgc3BlY2lmeSB3b3JraW5nIGJyYW5jaCBwcmVmaXguIGRlZmF1bHQgcHJlZml4IGlzIFwiJHtkZWZhdWx0UHJlZml4fVwiYCwgZGVmYXVsdFByZWZpeClcbiAgICAub3B0aW9uKFwiLS13b3JraW5nZGlyIDxwYXRoPlwiLCBgc3BlY2lmeSBwcm9qZWN0IHJvb3QgZGlyLiBpdCBjb250YWlucyBwYWNrYWdlLmpzb24uIGRlZmF1bHQgcGF0aCBpcyAke3Byb2Nlc3MuY3dkKCl9YCwgcHJvY2Vzcy5jd2QoKSlcbiAgICAub3B0aW9uKFwiLS13aXRoLXNoYWRvd3NcIiwgXCJpZiB5b3Ugc3BlY2lmeSB0aGlzIG9wdGlvbiwgc2hvd3Mgc2hhZG93IGRlcGVuZGVuY2llcyBjaGFuZ2VzLlwiLCBmYWxzZSlcbiAgICAucGFyc2UocHJvY2Vzcy5hcmd2KTtcblxuLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuaWYgKGNtZC51c2VybmFtZSAmJiBjbWQudXNlcmVtYWlsICYmIGNtZC50b2tlbikge1xuICAgIGNtZC5ub3cgPSBtb21lbnQoKS5mb3JtYXQoXCJZWVlZTU1ERGhobW1zc1wiKTtcbiAgICBjbWQubG9nZ2VyID0gY21kLnZlcmJvc2UgPyBtID0+IGNvbnNvbGUubG9nKGA+ICR7bX1gKSA6ICgpID0+IHsgfTtcbiAgICBQcm9taXNlLmFsbChbdXIoY21kKV0pXG4gICAgICAgIC50aGVuKChbbXNnXSkgPT4ge1xuICAgICAgICAgICAgbXNnICYmIGNvbnNvbGUubG9nKG1zZyk7XG4gICAgICAgICAgICBjbWQubG9nZ2VyKFwiQWxsIGRvbmUhIVwiKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIGlmIChpc1N0cmluZyhlcnIpKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIHByb2Nlc3MuZXhpdCgxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG59IGVsc2Uge1xuICAgIGNvbnNvbGUubG9nKGNvbG9ycy5yZWQoXCJQbGVhc2Ugc2V0IHJlcXVpcmVkIHBhcmFtZXRlcnM6IHVzZXJuYW1lLCB1c2VyZW1haWwsIHRva2VuXCIpKTtcbiAgICBjbWQuaGVscCgpO1xufVxuLyogZXNsaW50LWVuYWJsZSBuby1jb25zb2xlICovXG4iXX0=