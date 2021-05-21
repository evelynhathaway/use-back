export default function wallabyConfig () {
	return {
		autoDetect: true,
		hints: {
			ignoreCoverageForFile: /ignore file coverage|istanbul ignore file/,
		},
		reportConsoleErrorAsError: true,
		lowCoverageThreshold: 99,
		env: {
			params: {
				runner: "--experimental-vm-modules",
			},
		},
	};
}
